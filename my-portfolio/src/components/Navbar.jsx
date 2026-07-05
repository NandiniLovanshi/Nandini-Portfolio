import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-cyan-600 dark:bg-slate-900/90 backdrop-blur-lg shadow-xl border-b border-cyan-500/20 z-50 transition-all duration-500">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-white dark:text-cyan-400 cursor-pointer">
          Nandini Lovanshi
        </h1>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-medium text-white dark:text-white">

          <li>
            <a href="#home" className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#about" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#skills" className="relative group">
              Skills
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#projects" className="relative group">
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#experience" className="relative group">
              Experience
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#education" className="relative group">
              Education
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-white text-cyan-700 dark:bg-cyan-500 dark:text-white hover:scale-105 transition duration-300 shadow-lg"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-slate-700 shadow-lg hover:scale-110 transition-all duration-300"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text-slate-900 text-xl" />
          )}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;