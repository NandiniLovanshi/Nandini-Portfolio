function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-16 py-20 transition-all duration-500"
    >
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <h4 className="text-cyan-500 dark:text-cyan-400 text-lg sm:text-xl font-semibold text-center mb-3">
          ABOUT ME
        </h4>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Know More{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            About Me
          </span>
        </h2>

        {/* Introduction */}
<p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-10 text-center max-w-4xl mx-auto transition-all duration-500">
  Hello! I'm{" "}
  <span className="text-cyan-500 dark:text-cyan-400 font-bold">
    Nandini Lovanshi
  </span>
  , a passionate{" "}
  <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
    Frontend, React & MERN Stack Developer
  </span>{" "}
  with a strong interest in building modern, responsive, and user-friendly web
  applications. I enjoy turning creative ideas into interactive digital
  experiences using{" "}
  <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
    HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Express.js,
    MongoDB, and REST APIs
  </span>
  . I focus on writing clean, scalable, and maintainable code while developing
  fast, visually appealing, and high-performance applications. I am always
  eager to learn emerging technologies, solve real-world problems, and
  continuously enhance my skills to create impactful digital solutions.
</p>

      </div>
    </section>
  );
}

export default About;