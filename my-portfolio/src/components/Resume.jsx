function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-4xl w-full text-center">

        {/* Heading */}
        

        <h2 className="text-2xl font-bold mt-2 mb-8">
          My <span className="text-cyan-400">Resume</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-xl leading-8 mb-12">
          My resume highlights my academic background, technical skills,
          internship experience, and projects developed using the MERN Stack.
          It reflects my passion for web development and my commitment to
          building modern, responsive, and user-friendly applications.
        </p>

        {/* Resume Card */}
        <div className="bg-slate-800 border border-cyan-500 rounded-2xl p-10 shadow-lg hover:shadow-cyan-500/40 transition duration-300">

          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            Nandini Lovanshi
          </h3>

          <p className="text-gray-300 mb-8">
            Frontend Developer | React Developer | MERN Stack Developer
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">

            {/* View Resume */}
            <a
              href="/Nandini_Lovanshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              👁 View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/Nandini_Lovanshi_Resume.pdf"
              download
              className="border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              ⬇ Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;