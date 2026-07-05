function Education() {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institute: "Shri Dadaji Institute of Technology and Science, Khandwa",
      score: "CGPA: 8.53",
      year: "2026",
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institute: "Government Holkar Science College, Indore",
      score: "Percentage: 67.29%",
      year: "2023",
    },
    {
      degree: "Higher Secondary Education (12th)",
      institute: "M.P. Board",
      score: "Percentage: 85%",
      year: "2020",
    },
    {
      degree: "Secondary Education (10th)",
      institute: "M.P. Board",
      score: "Percentage: 82.2%",
      year: "2018",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-8 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Educational{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Qualification
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-cyan-400 ml-5">

          {education.map((item, index) => (
            <div key={index} className="relative mb-10 ml-8">

              {/* Timeline Dot */}
              <div className="absolute -left-[46px] top-8 w-5 h-5 bg-cyan-400 rounded-full border-4 border-white dark:border-slate-950"></div>

              {/* Card */}
              <div className="relative bg-gray-100 dark:bg-slate-800 border border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300">

                {/* Year Badge */}
                <span className="absolute top-5 right-5 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  🎓 {item.year}
                </span>

                {/* Degree */}
                <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-400 mb-3">
                  {item.degree}
                </h3>

                {/* Institute */}
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {item.institute}
                </h4>

                {/* Score */}
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {item.score}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;