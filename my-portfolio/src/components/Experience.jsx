import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-slate-900 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            My <span className="text-pink-600">Experience</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            My professional journey and internship experience.
          </p>
        </div>

        {/* Experience Card */}
        <div className="mt-16 flex justify-center">

          <div className="w-full max-w-4xl bg-gray-100 dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-pink-500/40 hover:shadow-2xl transition-all duration-500">

            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Left */}
              <div className="flex items-start gap-4">

                <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center shadow-lg">
                  <FaBriefcase className="text-white text-3xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    MERN Stack Developer Intern
                  </h3>

                  <h4 className="mt-2 text-lg font-semibold text-pink-600">
                    Shanti Infosoft LLP
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    AI / Web and App Design And Development Company
                  </p>

                  <p className="mt-3 text-pink-600 font-semibold">
                    September 2025 – February 2026
                  </p>
                </div>

              </div>

              {/* Internship Badge */}
              <div>
                <span className="inline-block bg-pink-100 dark:bg-pink-900/30 text-pink-600 px-5 py-2 rounded-full font-semibold">
                  Internship
                </span>
              </div>

            </div>

            {/* Description */}
            <div className="mt-10 space-y-4 text-gray-700 dark:text-gray-300 leading-8">

              <p>
                • Developed responsive and user-friendly web applications using
                React.js, Tailwind CSS, JavaScript, Node.js, Express.js, and
                MongoDB.
              </p>

              <p>
                • Built reusable React components and integrated REST APIs to
                create dynamic and interactive user interfaces.
              </p>

              <p>
                • Collaborated with the development team to improve application
                performance, responsiveness, and overall user experience.
              </p>

              <p>
                • Worked with Git, GitHub, and Postman for version control,
                API testing, and project collaboration while following clean
                coding practices.
              </p>

              <p>
                • Participated in developing full-stack web applications and
                gained hands-on experience with the MERN Stack.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;