// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//   title: "Portfolio Website",
//   image: "/public/front.jpg",
//   description:
//     "A responsive personal portfolio showcasing my skills, education, experience, certifications, and projects.",
//   technologies: [
//     "React.js",
//     "Tailwind CSS",
//   ],
//   github: "https://github.com/NandiniLovanshi/Nandini-Portfolio",
//   live: "https://nandini-portfolio-omega.vercel.app/",
// },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="py-24 bg-white dark:bg-slate-900 transition-all duration-300"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-black dark:text-white">
//             My <span className="text-pink-600">Projects</span>
//           </h2>

//           <p className="mt-4 text-gray-600 dark:text-gray-300">
//             Some of the projects I have built using modern web technologies.
//           </p>
//         </div>

//         {/* Project Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-pink-500/40 hover:shadow-2xl transition-all duration-300"
//             >

//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-56 object-cover"
//               />

//               {/* Content */}
//               <div className="p-6">

//                 <h3 className="text-2xl font-bold text-black dark:text-white">
//                   {project.title}
//                 </h3>

//                 <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mt-6">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="bg-pink-100 dark:bg-pink-600/20 text-pink-600 px-3 py-1 rounded-full text-sm font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-4 mt-8">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white py-3 rounded-xl transition"
//                   >
//                     <FaGithub />
//                     GitHub
//                   </a>

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl transition"
//                   >
//                     <FaExternalLinkAlt />
//                     Live
//                   </a>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    image: "/front.jpg",
    description:
      "A responsive personal portfolio showcasing my skills, education, experience, certifications, and projects.",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/NandiniLovanshi/Nandini-Portfolio",
    live: "https://nandini-portfolio-omega.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
      
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-black dark:text-white">Projects</span>
          </h2>

          <p className="mt-5 text-lg text-gray-700 dark:text-black max-w-2xl mx-auto">
            Some of the projects I have built using modern web technologies.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
              bg-[#fff7f9]
                dark:bg-slate-900/80
                backdrop-blur-xl
                rounded-[30px]
                overflow-hidden
                border-pink-300
                shadow-xl
                hover:-translate-y-3
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
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-8">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-pink-100
                        text-pink-700
                        text-sm
                        font-semibold
                        shadow-sm
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

                <div className="flex gap-4 mt-8">
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
                      font-semibold
                      shadow-xl
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
