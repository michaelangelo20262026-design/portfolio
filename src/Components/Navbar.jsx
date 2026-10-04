import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-lg transition duration-300 ${
      isActive
        ? "text-blue-400 bg-blue-400/10"
        : "text-gray-300 hover:text-white hover:bg-white/5"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#07182D]/90 backdrop-blur-xl border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl sm:text-2xl font-bold text-white tracking-tight hover:text-blue-300 transition duration-300 shrink-0"
          >
            Michael
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 font-medium">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/skills" className={navLinkClass}>
                  Skills
                </NavLink>
              </li>

              <li>
                <NavLink to="/projects" className={navLinkClass}>
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>

            <Link
              to="/contact"
              className="bg-[#2563EB] text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-[#2563EB]/20 hover:bg-white hover:text-[#123B63] hover:-translate-y-0.5 transition duration-300"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 shrink-0 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pt-5 pb-2 w-full">
            <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/skills"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                Skills
              </NavLink>

              <NavLink
                to="/projects"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="mt-2 text-center bg-[#2563EB] text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-500 transition duration-300"
              >
                Let's Talk
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
