import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  
  {
    title: "School-Management-System",
    image: "/School.png",
    description:
      "A school management system for managing students, teachers, and subjects.",
    technologies: ["React.js", "Tailwind CSS", "Context API", "localStorage"],
    github: "https://github.com/NandiniLovanshi/School-Management-System",
    live: "https://school-management-system-swart-nine.vercel.app/"
  },
  {
    title: "AI Saas Landing Page",
    image: "/AIFlow.png",
    description:
"A modern AI SaaS Landing Page designed to showcase AI-powered services, product features, pricing plans, and encourage users to start a free trial or subscribe."
      ,
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/NandiniLovanshi/AI_Saas_Landing_Page",
    live: "https://ai-saas-landing-page-olive.vercel.app/",
  },
  {
    title:"Restaurant Landing Page",
    image:"/Restaurant.png",
    description:"A modern and user-friendly landing page for a restaurant website, showcasing the restaurant's menu, services, and contact information.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/NandiniLovanshi/Restaurant-Landing-Page",
    live: "https://restaurant-landing-page-psi-dun.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-black dark:text-white">Projects</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-black max-w-2xl mx-auto px-2">
            Some of the projects I have built using modern web technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="
                group
                bg-[#fff7f9]
                dark:bg-slate-900/80
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                border
                border-pink-300
                shadow-lg
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(236,72,153,0.35)]
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-pink-100
                        text-pink-700
                        text-xs
                        sm:text-sm
                        font-semibold
                        hover:bg-pink-600
                        hover:text-white
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-gray-900
                      hover:bg-black
                      text-white
                      py-3
                      rounded-2xl
                      text-sm
                      sm:text-base
                      font-semibold
                      shadow-lg
                      hover:scale-105
                      transition-all
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-gradient-to-r
                      from-pink-500
                      to-rose-500
                      hover:from-pink-600
                      hover:to-rose-600
                      text-white
                      py-3
                      rounded-2xl
                      text-sm
                      sm:text-base
                      font-semibold
                      shadow-lg
                      hover:scale-105
                      transition-all
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
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