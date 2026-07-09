import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2024 - 2026",
    degree: "Master of Computer Applications (MCA)",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    score: "CGPA: 8.53",
  },
  {
    year: "2020 - 2023",
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Devi Ahilya Vishwavidyalaya (DAVV)",
    score: "Percentage: 67.29%",
  },
  {
    year: "2019 - 2020",
    degree: "Higher Secondary School (12th)",
    institute: "M.P. Board",
    score: "Percentage: 85%",
  },
  {
    year: "2017 - 2018",
    degree: "Secondary School (10th)",
    institute: "M.P. Board",
    score: "Percentage: 82.2%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-gray-50 dark:bg-slate-950 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            My <span className="text-pink-600">Education</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            My academic journey and achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-pink-500 -translate-x-1/2"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >

              {/* Card */}
              <div
                className="w-full md:w-5/12 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6
                hover:-translate-y-2 hover:shadow-pink-500/40 hover:shadow-2xl
                transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-pink-600">
                  {item.degree}
                </h3>

                <p className="mt-2 text-gray-700 dark:text-white">
                  {item.institute}
                </p>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {item.score}
                </p>

                <span className="inline-block mt-4 px-4 py-1 rounded-full bg-pink-100 text-pink-600 font-semibold">
                  {item.year}
                </span>
              </div>

              {/* Icon */}
              <div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2
                w-14 h-14 rounded-full bg-pink-600 items-center justify-center
                shadow-lg"
              >
                <FaGraduationCap className="text-white text-2xl" />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;