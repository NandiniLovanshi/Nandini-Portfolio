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
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-black dark:text-white">Skills</span>
          </h2>

          <p className="mt-5 text-lg text-gray-700 dark:text-black max-w-2xl mx-auto">
            Technologies and tools I use to build modern, responsive and
            scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                bg-[#fff7f9]
                dark:bg-slate-900/80
                backdrop-blur-xl
                rounded-[30px]
                border
                border-pink-300
                shadow-xl
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(236,72,153,0.35)]
                transition-all
                duration-500
                p-8
                flex
                flex-col
                items-center
              "
            >
              {/* Skill Image */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow-md p-3 group-hover:scale-110 transition duration-500">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Skill Name */}
              <h4 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white text-center">
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