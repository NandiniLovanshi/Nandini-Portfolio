function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-20 px-6 sm:px-8 md:px-10 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 md:mb-16">
          Work{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-cyan-400 pl-6 sm:pl-10">

          {/* Timeline Dot */}
          <div className="absolute -left-3 top-5 w-5 h-5 sm:w-6 sm:h-6 bg-cyan-400 rounded-full border-4 border-white dark:border-slate-900"></div>

          {/* Experience Card */}
          <div className="relative bg-gray-100 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-cyan-400 shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300">

            {/* Date */}
            <span className="inline-block sm:absolute sm:top-6 sm:right-6 mb-5 sm:mb-0 bg-cyan-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
              Sep 2025 – Aug 2026
            </span>

            {/* Role */}
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-500 dark:text-cyan-400 mb-2">
              MERN Stack Developer Intern
            </h3>

            {/* Company */}
            <h4 className="text-lg sm:text-xl font-semibold">
              Shanti Infosoft LLP
            </h4>

            {/* Location */}
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
              AI / Web & App Design and Development Company • Indore, India
            </p>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-8 transition-all duration-500">
              During my internship at{" "}
              <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
                Shanti Infosoft LLP
              </span>
              , I worked as a{" "}
              <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
                MERN Stack Developer Intern
              </span>
              , where I gained hands-on experience in developing responsive web
              applications using{" "}
              <strong>
                MongoDB, Express.js, React.js, and Node.js
              </strong>
              . I collaborated with the development team to build reusable React
              components, integrate REST APIs, optimize application performance,
              and create responsive user interfaces using Tailwind CSS. This
              internship strengthened my problem-solving skills, teamwork, and
              practical knowledge of the complete MERN Stack development
              process.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;