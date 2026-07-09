import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left">

            <p className="text-pink-600 font-semibold text-lg">
              Hello, I'm
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Nandini
              <span className="text-pink-600"> Lovanshi</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              React Developer | Frontend Developer
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-xl">
              Passionate about building beautiful, responsive and user-friendly
              web applications using React.js, JavaScript and Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">

              <a
                href="#contact"
                className="
                  px-8
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-pink-500
                  to-rose-500
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Contact Me
              </a>

              <a
                href="/Resume.pdf"
                download="Resume.pdf"
                className="
                  px-8
                  py-3
                  rounded-2xl
                  border-2
                  border-pink-500
                  text-pink-600
                  bg-white
                  hover:bg-pink-500
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Download CV
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-5 mt-10">

              <a
                href="https://github.com/NandiniLovanshi"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#fff7f9]
                  border
                  border-pink-300
                  flex
                  items-center
                  justify-center
                  text-2xl
                  text-gray-900
                  shadow-lg
                  hover:bg-gradient-to-r
                  hover:from-pink-500
                  hover:to-rose-500
                  hover:text-white
                  hover:scale-110
                  transition-all
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nandini-lovanshi-301462366"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#fff7f9]
                  border
                  border-pink-300
                  flex
                  items-center
                  justify-center
                  text-2xl
                  text-gray-900
                  shadow-lg
                  hover:bg-gradient-to-r
                  hover:from-pink-500
                  hover:to-rose-500
                  hover:text-white
                  hover:scale-110
                  transition-all
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:lovanshinandini42@gmail.com"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#fff7f9]
                  border
                  border-pink-300
                  flex
                  items-center
                  justify-center
                  text-2xl
                  text-gray-900
                  shadow-lg
                  hover:bg-gradient-to-r
                  hover:from-pink-500
                  hover:to-rose-500
                  hover:text-white
                  hover:scale-110
                  transition-all
                "
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-pink-400 blur-3xl opacity-30 scale-110"></div>

              {/* Image */}
              <div className="
                relative
                w-72
                h-72
                md:w-96
                md:h-96
                rounded-full
                overflow-hidden
                border-4
                border-white
                shadow-[0_20px_60px_rgba(236,72,153,0.35)]
                hover:scale-105
                transition-all
                duration-500
              ">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;