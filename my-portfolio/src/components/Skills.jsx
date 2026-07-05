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
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-8 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Technical{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-900 border border-cyan-400 rounded-xl p-5 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />

              <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white text-center">
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