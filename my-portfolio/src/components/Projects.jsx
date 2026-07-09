import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  

  {
    title: "Myntra Clone",
    image: "/projects/myntra.png",
    description:
      "A responsive Myntra-inspired e-commerce frontend featuring category navigation, product listings, and modern UI.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/NandiniLovanshi",
    live: "#",
  },

  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description:
      "Personal portfolio showcasing my skills, education, experience, certifications and projects.",
    technologies: [
      "React.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/NandiniLovanshi",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            My <span className="text-pink-600">Projects</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Some of the projects I have built using modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-pink-500/40 hover:shadow-2xl transition-all duration-300"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-pink-100 dark:bg-pink-600/20 text-pink-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;