import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "MERN Stack Developer Internship",
    organization: "Shanti Infosoft LLP",
    description:
      "AI / Web and App Design And Development Company, Indore, India.",
    year: "2026",
    link: "/Internship.jpeg",
  },
  {
    title: "Web Development for Beginners",
    organization: "Simplilearn",
    description:
      "Successfully completed the Web Development for Beginners certification.",
    year: "2025",
    link: "/Web.pdf",
  },
];

const Certification = () => {
  return (
    <section
      id="certifications"
      data-aos="fade-up"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-black dark:text-white">Certifications</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-black max-w-2xl mx-auto px-2">
            Certifications that showcase my learning journey and technical
            expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 sm:mt-16">

          {certifications.map((certificate, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="
group
w-full
max-w-sm
bg-[#fff7f9]
dark:bg-slate-900/80
backdrop-blur-xl
rounded-2xl
sm:rounded-[30px]
overflow-hidden
border
border-pink-300
shadow-lg
hover:-translate-y-2
hover:shadow-[0_20px_50px_rgba(236,72,153,0.35)]
transition-all
duration-500
p-5
sm:p-6
"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                <FaCertificate className="text-white text-2xl sm:text-3xl" />
              </div>

              {/* Content */}
              <div className="text-center mt-6">

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {certificate.title}
                </h3>

                <h4 className="mt-2 text-base sm:text-lg font-semibold text-pink-600">
                  {certificate.organization}
                </h4>

                <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-7">
                  {certificate.description}
                </p>

                <span
                  className="
                    inline-block
                    mt-5
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
                  {certificate.year}
                </span>

                {/* Button */}
                <div className="mt-8">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-gradient-to-r
                      from-pink-500
                      to-rose-500
                      hover:from-pink-600
                      hover:to-rose-600
                      text-white
                      px-5
py-2.5
text-sm
sm:text-base
                      rounded-2xl
                      font-semibold
                      shadow-xl
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt />
                    View Certificate
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

export default Certification;