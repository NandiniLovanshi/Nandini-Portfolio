import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#fff7f9]/80 dark:bg-slate-900/80 border-b border-pink-200 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent cursor-pointer">
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-3">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-gray-800
                    dark:text-white
                    font-medium
                    hover:bg-pink-500
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-pink-300 shadow-md flex items-center justify-center hover:scale-110 transition-all"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-slate-700 text-xl" />
              )}
            </button>

            {/* Mobile Button */}
            <button
              className="lg:hidden w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-pink-300 shadow-md flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-3 mb-4 rounded-3xl bg-[#fff7f9] dark:bg-slate-900 border border-pink-200 shadow-xl p-5">

            <ul className="flex flex-col gap-3">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block
                      px-4
                      py-3
                      rounded-xl
                      text-gray-800
                      dark:text-white
                      hover:bg-pink-500
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
