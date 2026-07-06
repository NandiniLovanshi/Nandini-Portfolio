function Skills() {
  const skills = [
    { name: "HTML5", image: "/Html.jpg" },
    { name: "CSS3", image: "/Css.jpg" },
    { name: "JavaScript", image: "/JavaScript.jpg" },
    { name: "React", image: "/React.jpg" },
    { name: "Tailwind CSS", image: "/Tailwind.jpg" },
    { name: "Node.js", image: "/Nodejs.jpg" },
    { name: "Express.js", image: "/Expressjs.jpg" },
    { name: "MongoDB", image: "/Mongodb.jpg" },
    { name: "REST API", image: "/Api.jpg" },
    { name: "Git", image: "/Git.jpg" },
    { name: "GitHub", image: "/GitHub.jpg" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-6 sm:px-8 md:px-10 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">
          Technical{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-900 border border-cyan-400 rounded-xl p-4 sm:p-5 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />

              <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-center">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;