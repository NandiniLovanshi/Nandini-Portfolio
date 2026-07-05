function Certification() {
  const certificates = [
    {
      title: "MERN Stack Developer Intern",
      organization: "Shanti Infosoft LLP",
      description:
        "Successfully completed a MERN Stack Developer Internship and gained hands-on experience in React.js, Node.js, Express.js, MongoDB, REST APIs, and responsive web application development.",
    },
    {
      title: "Web Development for Beginners",
      organization: "Simplilearn",
      description:
        "Learned the fundamentals of web development including HTML, CSS, JavaScript, responsive design, and website development concepts.",
    },
    {
      title: "React.js for Beginners",
      organization: "Simplilearn",
      description:
        "Completed React.js fundamentals including components, props, state, hooks, routing, and building modern single-page applications.",
    },
  ];

  return (
    <section
      id="certification"
      className="min-h-screen bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        

        <h2 className="text-2xl font-bold text-center mt-2 mb-16">
        <span className="text-cyan-400">Certifications</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-7 border border-cyan-500 hover:scale-105 hover:shadow-[0_0_25px_#06b6d4] transition-all duration-300"
            >
              

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                {certificate.title}
              </h3>

              <h4 className="text-xl font-semibold text-white mb-4">
                {certificate.organization}
              </h4>

              <p className="text-gray-300 leading-7">
                {certificate.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certification;