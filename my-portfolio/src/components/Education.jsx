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
  data-aos="fade-up"
  className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
>
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-black dark:text-white">Education</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-black">
            My academic journey and achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-10 sm:mt-16">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-pink-300 -translate-x-1/2 rounded-full"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-14 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              {/* Card */}
              <div
              data-aos="fade-up"
                className="
                
group
w-full
md:w-[42%]
bg-[#fff7f9]
dark:bg-slate-900/80
backdrop-blur-xl
rounded-2xl
sm:rounded-[28px]
overflow-hidden
border
border-pink-300
shadow-lg
p-5
sm:p-6
hover:-translate-y-2
hover:shadow-[0_15px_45px_rgba(236,72,153,0.35)]
transition-all
duration-500
"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {item.degree}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {item.institute}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {item.score}
                </p>

                <span
                  className="
inline-block
mt-4
px-3
py-1.5
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
                  {item.year}
                </span>
              </div>

              {/* Timeline Icon */}
              <div
                className="
                  hidden
                  md:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-12
h-12
lg:w-14
lg:h-14
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-rose-500
                  items-center
                  justify-center
                  shadow-xl
                "
              >
                <FaGraduationCap className="text-white text-xl lg:text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;