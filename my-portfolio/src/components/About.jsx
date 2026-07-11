const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-black dark:text-white">Me</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-black max-w-2xl mx-auto px-2">
            Get to know me, my background and what I enjoy building.
          </p>
        </div>

        {/* About Card */}
        <div
  data-aos="fade-up"
  className="
            mt-10 sm:mt-16
            bg-white
            dark:bg-slate-500/70
            backdrop-blur-xl
            rounded-[24px] sm:rounded-[30px]
            border
            border-pink-300
            shadow-xl
            hover:-translate-y-3
            hover:shadow-[0_20px_60px_rgba(236,72,153,0.35)]
            transition-all
            duration-500
            p-6 sm:p-10
            text-center
"
>
          <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 text-gray-800 dark:text-gray-100">

  I'm a passionate{" "}
  <span className="font-semibold text-black">
    Frontend & React.js Developer
  </span>{" "}
  with a strong foundation in{" "}
  <span className="font-semibold text-black">
    HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, React Router DOM,
    REST APIs, Git, GitHub, Node.js, Express.js, and MongoDB
  </span>
  . I have completed my{" "}
  <span className="font-semibold text-black">
    Master of Computer Applications (MCA)
  </span>{" "}
  and enjoy building responsive, user-friendly, and modern web applications
  with clean, reusable code.

  <br />


  I'm always eager to learn new technologies, enhance my problem-solving
  skills, and contribute to developing high-quality web applications.

</p>
        </div>

      </div>
    </section>
  );
};

export default About;