import { useState } from "react";

function AdminPage() {
  const [password, setPassword] = useState("");
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function fetchStatistics() {
    const response = await fetch("/api/visitor-stats", {
      method: "GET",
      credentials: "same-origin",
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Unable to load visitor statistics.");
    }

    setStatistics(data.statistics);
  }

  async function handleLogin(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      setPassword("");
      await fetchStatistics();
    } catch (error) {
      setMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRefresh() {
    setLoading(true);
    setMessage("");

    try {
      await fetchStatistics();
    } catch (error) {
      setMessage(error.message || "Unable to refresh statistics.");

      setStatistics(null);
    } finally {
      setLoading(false);
    }
  }

  const cards = statistics
    ? [
        {
          title: "Total Visits",
          value: statistics.totalVisits,
          description: "All recorded page visits",
        },
        {
          title: "Unique Visitors",
          value: statistics.uniqueVisitors,
          description: "Distinct visitor IDs",
        },
        {
          title: "Returning Visitors",
          value: statistics.returningVisitors,
          description: "Visitors with multiple recorded visits",
        },
      ]
    : [];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        {!statistics ? (
          <section className="mx-auto mt-10 max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-3xl text-blue-400">
                🔐
              </div>

              <h1 className="text-3xl font-bold">Admin Login</h1>

              <p className="mt-3 text-sm text-slate-400">
                Sign in to access your portfolio analytics.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <label
                htmlFor="admin-password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Admin Password
              </label>

              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your admin password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              {message && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400"
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-slate-500">
              Private administrator area
            </p>
          </section>
        ) : (
          <section>
            <header className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Portfolio Management
                </p>

                <h1 className="text-3xl font-bold sm:text-4xl">
                  Visitor Analytics
                </h1>

                <p className="mt-2 text-slate-400">
                  Monitor traffic to your portfolio website.
                </p>
              </div>

              <button
                type="button"
                onClick={handleRefresh}
                disabled={loading}
                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-medium transition hover:border-blue-500 disabled:opacity-60"
              >
                {loading ? "Refreshing..." : "Refresh Data"}
              </button>
            </header>

            {message && (
              <p
                role="alert"
                className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400"
              >
                {message}
              </p>
            )}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <p className="text-sm text-slate-400">{card.title}</p>

                  <p className="mt-4 text-4xl font-bold text-white">
                    {Number(card.value || 0).toLocaleString()}
                  </p>

                  <p className="mt-3 text-sm text-slate-500">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="border-b border-slate-800 p-6">
                <h2 className="text-xl font-bold">Visitors by Country</h2>

                <p className="mt-2 text-sm text-slate-400">
                  Recorded visits and distinct visitors per country.
                </p>
              </div>

              {statistics.countries?.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-950/60 text-slate-400">
                      <tr>
                        <th className="px-6 py-4 font-medium">Country</th>

                        <th className="px-6 py-4 font-medium">Visits</th>

                        <th className="px-6 py-4 font-medium">
                          Unique Visitors
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {statistics.countries.map((country, index) => (
                        <tr
                          key={`${country.country}-${index}`}
                          className="border-t border-slate-800"
                        >
                          <td className="px-6 py-4">
                            {country.country || "Unknown"}
                          </td>

                          <td className="px-6 py-4">
                            {Number(country.visits || 0).toLocaleString()}
                          </td>

                          <td className="px-6 py-4">
                            {Number(
                              country.uniqueVisitors || 0,
                            ).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="p-6 text-sm text-slate-400">
                  No visitor country data is available yet.
                </p>
              )}
            </section>

            <p className="mt-8 text-center text-xs text-slate-500">
              Portfolio Analytics · Private Admin Dashboard
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

export default AdminPage;
