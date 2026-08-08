import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative overflow-hidden min-h-screen pb-16 sm:pb-20 flex items-center pt-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Side */}
<div
  data-aos="fade-up"
  className="flex-1 text-center lg:text-left"
>
  {/* Name */}
  <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
    Nandini
    <span className="text-black"> Lovanshi</span>
  </h1>

  {/* Heading */}
  <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-black">
    MERN Stack Developer | React Frontend Developer
  </h2>

  {/* Mobile Image */}
  <div className="flex justify-center lg:hidden mt-8">
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-pink-400 blur-3xl opacity-30 scale-110"></div>

      <div
        className="
        relative
        w-48
        h-48
        rounded-full
        overflow-hidden
        border-4
        border-white
        shadow-[0_20px_60px_rgba(236,72,153,0.35)]
      "
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Paragraph */}
  <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-black max-w-xl mx-auto lg:mx-0">
    Passionate about building beautiful, responsive and user-friendly web
    applications using React.js, MongoDB, Node.js, Express.js, JavaScript and Tailwind CSS.
  </p>

  {/* Buttons */}
  <div
    data-aos="fade-up"
    className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5"
  >
    <a
      href="#contact"
      className="
      px-6 sm:px-8
      py-2.5 sm:py-3
      rounded-2xl
      bg-gradient-to-r
      from-pink-500
      to-rose-500
      text-white
      text-sm sm:text-base
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
      href="/Nandini_Lovanshi_CV.pdf"
      download="Nandini_Lovanshi_CV.pdf"
      className="
      px-6 sm:px-8
      py-2.5 sm:py-3
      rounded-2xl
      border-2
      border-pink-500
      text-pink-600
      text-sm sm:text-base
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
  <div
    data-aos="fade-up"
    className="flex justify-center lg:justify-start gap-4 sm:gap-5 mt-8 mb-10 lg:mb-0"
  >
    <a
      href="https://github.com/NandiniLovanshi"
      target="_blank"
      rel="noreferrer"
      className="
      w-12 h-12
      sm:w-14 sm:h-14
      rounded-full
      bg-[#fff7f9]
      border
      border-pink-300
      flex
      items-center
      justify-center
      text-xl
      sm:text-2xl
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
      w-12 h-12
      sm:w-14 sm:h-14
      rounded-full
      bg-[#fff7f9]
      border
      border-pink-300
      flex
      items-center
      justify-center
      text-xl
      sm:text-2xl
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
      w-12 h-12
      sm:w-14 sm:h-14
      rounded-full
      bg-[#fff7f9]
      border
      border-pink-300
      flex
      items-center
      justify-center
      text-xl
      sm:text-2xl
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
          <div 
          data-aos="fade-left"
          className=" hidden flex-1 lg:flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-pink-400 blur-3xl opacity-30 scale-110"></div>
              {/* Image */}
              <div
                className="
    relative
    mt-10
    w-45
    h-45
    sm:w-60
    sm:h-60
    md:w-80
    md:h-80
    rounded-full
    overflow-hidden
    border-4
    border-white
    shadow-[0_20px_60px_rgba(236,72,153,0.35)]
    hover:scale-105
    transition-all
    duration-500
  "
              >
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