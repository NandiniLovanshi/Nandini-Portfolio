import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-cyan-400 py-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">

        {/* Copyright */}
        <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
          © 2026{" "}
          <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
            Nandini Lovanshi
          </span>
          . All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-5 md:mt-0">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-username/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-all duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NandiniLovanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-all duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-instagram-username/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-all duration-300 hover:scale-125"
          >
            <FaInstagram />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;