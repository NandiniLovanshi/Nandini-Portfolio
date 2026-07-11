import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
  data-aos="fade-up"
  className="relative overflow-hidden bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black border-t border-pink-300"
>

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">

          <a
            href="https://github.com/NandiniLovanshi"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
h-12
sm:w-14
sm:h-14
              rounded-full
              bg-[#fff7f9]
              dark:bg-slate-900/80
              border
              border-pink-300
              flex
              items-center
              justify-center
              text-xl
              text-gray-900
              dark:text-white
              shadow-lg
              hover:bg-gradient-to-r
              hover:from-pink-500
              hover:to-rose-500
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nandini-lovanshi-301462366"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
h-12
sm:w-14
sm:h-14
              rounded-full
              bg-[#fff7f9]
              dark:bg-slate-900/80
              border
              border-pink-300
              flex
              items-center
              justify-center
              text-xl
              text-gray-900
              dark:text-white
              shadow-lg
              hover:bg-gradient-to-r
              hover:from-pink-500
              hover:to-rose-500
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:lovanshinandini42@gmail.com"
            className="
              w-12
h-12
sm:w-14
sm:h-14
              rounded-full
              bg-[#fff7f9]
              dark:bg-slate-900/80
              border
              border-pink-300
              flex
              items-center
              justify-center
              text-xl
              text-gray-900
              dark:text-white
              shadow-lg
              hover:bg-gradient-to-r
              hover:from-pink-500
              hover:to-rose-500
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-pink-300 my-5 sm:my-6"></div>

        {/* Copyright */}
        <p className="text-center text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-7 px-2">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-pink-600 whitespace-nowrap">
            Nandini Lovanshi
          </span>
          . All Rights Reserved.
        </p>

        

      </div>
    </footer>
  );
};

export default Footer;