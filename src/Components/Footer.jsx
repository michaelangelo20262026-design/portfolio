import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#050F1E] text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight hover:text-blue-400 transition duration-300"
            >
              Michael
            </Link>

            <p className="text-gray-500 text-sm mt-2">
              Full-Stack Web Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link
              to="/about"
              className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              About
            </Link>

            <Link
              to="/projects"
              className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Back to Top */}
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition duration-300"
          >
            Back to Top
            <span className="group-hover:-translate-y-1 transition-transform duration-300">
              ↑
            </span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Michael. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
