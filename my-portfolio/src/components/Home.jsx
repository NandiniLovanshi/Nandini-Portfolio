function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex items-center transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-10 pt-28">

        {/* Left Side Image */}
        <div className="flex justify-center order-1 md:order-1">
          <img
            src="/profile.jpg"
            alt="Nandini Lovanshi"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_30px_#06b6d4]"
          />
        </div>

        {/* Right Side Content */}
        <div className="text-center md:text-left order-2">

          <p className="text-cyan-500 dark:text-cyan-400 text-lg sm:text-xl font-semibold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Nandini Lovanshi
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-500 dark:text-cyan-400 mb-6">
            Frontend Developer | React Developer
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-8 mb-8 transition-all duration-500">
            I am a passionate Frontend and React Developer who enjoys
            creating responsive, modern, and user-friendly websites.
            I love transforming creative ideas into interactive web
            applications with clean code and attractive UI designs.
          </p>

          

        </div>

      </div>
    </section>
  );
}

export default Home;