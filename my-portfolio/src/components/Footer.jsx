import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-950 border-t border-gray-300 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-5">

          <a
            href="https://github.com/NandiniLovanshi"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-black dark:text-white hover:text-pink-600 hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nandini-lovanshi-301462366"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-black dark:text-white hover:text-pink-600 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:lovanshinandini42@gmail.com"
            className="text-3xl text-black dark:text-white hover:text-pink-600 hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-pink-600 font-semibold">
            Nandini Lovanshi
          </span>
          . All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;