const skills = [
  { name: "HTML5", image: "/Html.jpg" },
  { name: "CSS3", image: "/Css.jpg" },
  { name: "JavaScript", image: "/JavaScript.jpg" },
  { name: "React.js", image: "/React.jpg" },
  { name: "Tailwind CSS", image: "/Tailwind.jpg" },
  { name: "Node.js", image: "/Nodejs.jpg" },
  { name: "Express.js", image: "/Expressjs.jpg" },
  { name: "MongoDB", image: "/Mongodb.jpg" },
  { name: "REST APIs", image: "/Api.jpg" },
  { name: "Git", image: "/Git.jpg" },
  { name: "GitHub", image: "/GitHub.jpg" },
  { name: "VS Code", image: "/vs code.jpg" },
  { name: "Postman", image: "/postman.jpg" },
  { name: "Vercel", image: "/Vercel.jpg" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-slate-900 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            My <span className="text-pink-600">Skills</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-16">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-100 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:-translate-y-2 hover:shadow-pink-500/40 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />

              <h4 className="mt-4 text-center text-black dark:text-white font-medium">
                {skill.name}
              </h4>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;