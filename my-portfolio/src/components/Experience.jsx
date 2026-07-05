function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        

        <h2 className="text-2xl font-bold text-center mt-2 mb-16">
          Work <span className="text-cyan-400">Experience</span>
        </h2>

        {/* Experience Card */}
        <div className="relative border-l-4 border-cyan-400 pl-10">

          {/* Timeline Dot */}
          <div className="absolute -left-3 top-2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-900"></div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300">

            

            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              MERN Stack Developer Intern
            </h3>

            <h4 className="text-xl font-semibold text-white">
              Shanti Infosoft LLP
            </h4>

            <p className="text-gray-400 mb-6">
              AI / Web & App Design and Development Company                                                  Indore, India
            </p>

            <p className="text-gray-300 leading-8 text-[18px">
              During my internship at <span className="text-cyan-400 font-semibold">Shanti Infosoft LLP</span>,
              I worked as a <span className="text-cyan-400 font-semibold">MERN Stack Developer Intern</span>,
              where I gained hands-on experience in developing responsive web
              applications using <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
              I collaborated with the development team to build reusable React
              components, integrate REST APIs, optimize application performance,
              and create responsive user interfaces using Tailwind CSS. This
              internship strengthened my problem-solving skills, teamwork, and
              practical knowledge of the complete MERN Stack development process.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;