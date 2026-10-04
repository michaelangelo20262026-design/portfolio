import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setSending(true);
    setSubmitted(false);

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xljgrpgr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-[#07182D] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-12rem] left-[-10rem] w-[32rem] h-[32rem] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-12rem] right-[-10rem] w-[32rem] h-[32rem] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-14 md:mb-16 text-center md:text-left">
          <p className="text-blue-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Contact Me
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Let's build something
            <span className="block text-blue-400">great together.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Have a project in mind or want to work together? Send me a message
            and let's talk about it.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 md:p-9 backdrop-blur-sm text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-8">Get in touch</h3>

            <div className="space-y-7">
              <div>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  Email
                </p>

                <a
                  href="mailto:michaelangelo20262026@gmail.com"
                  className="text-gray-300 hover:text-white transition duration-300 break-all"
                >
                  michaelangelo20262026@gmail.com
                </a>
              </div>

              <div>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/2349065148981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  +234 906 514 8981
                </a>
              </div>

              <div>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/2349020484497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  +234 902 048 4497
                </a>
              </div>
            </div>

            <div className="mt-10 pt-7 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Available for freelance projects and web development
                opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-9 shadow-2xl"
          >
            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#123B63] mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition duration-300"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#123B63] mb-2">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition duration-300"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#123B63] mb-2">
                Your Message
              </label>

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#2563EB] text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:bg-[#123B63] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-600 font-semibold text-center mt-4">
                Message submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
