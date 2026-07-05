
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg shadow-xl border-b border-cyan-500/20 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-cyan-400 cursor-pointer transition-all duration-300">
          Nandini Lovanshi
        </h1>

        {/* Menu */}
        <ul className="flex items-center gap-10 text-white font-medium">

          <li>
            <a href="#home" className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#about" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#skills" className="relative group">
              Skills
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#projects" className="relative group">
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#experience" className="relative group">
              Experience
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#education" className="relative group">
              Education
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-cyan-500 text-white transition duration-300 shadow-lg"
            >
              Contact
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;