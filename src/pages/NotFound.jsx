import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 bg-[#07182D] text-center">
      <div>
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          404 Error
        </p>

        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6">
          Page Not Found
        </h1>

        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300"
        >
          Back Home
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
