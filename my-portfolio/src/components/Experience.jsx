import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-black dark:text-white">Experience</span>
          </h2>

          <p className="mt-5 text-lg text-gray-700 dark:text-gray-300">
            My professional journey and internship experience.
          </p>
        </div>

        {/* Experience Card */}
        <div className="mt-20 flex justify-center">
          <div
            className="
              group
              w-full
              max-w-5xl
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
              md:p-10
            "
          >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Left */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                  <FaBriefcase className="text-white text-3xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    MERN Stack Developer Intern
                  </h3>

                  <h4 className="mt-2 text-xl font-semibold text-pink-600">
                    Shanti Infosoft LLP
                  </h4>

                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    AI / Web and App Design And Development Company
                  </p>

                  <p className="mt-4 font-semibold text-pink-600">
                    September 2025 – February 2026
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div>
                <span
                  className="
                    px-5
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
                  Internship
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-pink-200"></div>

            {/* Description */}
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-8">
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
                • Worked with Git, GitHub, and Postman for version control, API
                testing, and project collaboration while following clean coding
                practices.
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