function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      image: "/portfolio.png", // public folder me image rakho
      description:
        "A modern, fully responsive personal portfolio website developed using React.js and Tailwind CSS with Dark/Light Mode, smooth navigation, responsive design, resume download, contact section, and professional UI.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      github: "https://github.com/NandiniLovanshi/Nandini-Portfolio",
      live: "https://your-vercel-link.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          My <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-cyan-400 shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;