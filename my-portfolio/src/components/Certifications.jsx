import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "MERN Stack Developer Internship",
    organization: "Shanti Infosoft LLP",
    description: "AI / Web and App Design And Development Company Indore, India",
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
      className="py-24 bg-gray-50 dark:bg-slate-950 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            My <span className="text-pink-600">Certifications</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Certifications that showcase my learning journey and technical expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((certificate, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-pink-500/40 hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-pink-600 flex items-center justify-center shadow-lg">
                <FaCertificate className="text-white text-4xl" />
              </div>

              {/* Content */}
              <div className="text-center mt-6">

                <h3 className="text-xl font-bold text-black dark:text-white">
                  {certificate.title}
                </h3>

                <h4 className="mt-2 text-pink-600 font-semibold">
                  {certificate.organization}
                </h4>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                  {certificate.description}
                </p>

                <span className="inline-block mt-5 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 font-semibold">
                  {certificate.year}
                </span>

                {/* View Certificate Button */}
                <div className="mt-6">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full transition-all duration-300"
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