function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white flex text-slate-900 dark:bg-slate-950 dark:text-white transition-all duration-500"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Nandini Lovanshi"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400"
          />
        </div>

        {/* Right Side Content */}
        <div>

          <p className="text-cyan-400 text-xl font-bold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Nandini Lovanshi
          </h1>

          <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
            Frontend Developer | React Developer
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-sm font-bold leading-8 mb-8 transition-all duration-500">
  I am a passionate Frontend and React Developer who enjoys
  creating responsive, modern and user-friendly websites.
  I love transforming creative ideas into interactive web
  applications with clean code and attractive UI designs.
</p>

          <div className="flex gap-5">

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold duration-300"
            >
              Hire Me
            </a>

            {/* Download CV */}
            <a
              href="/Nandini_Lovanshi_Resume.pdf"
              download="Nandini_Lovanshi_Resume.pdf"
              className="border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold duration-300"
            >
              Download CV
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;