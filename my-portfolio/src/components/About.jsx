const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-black dark:text-white">Me</span>
          </h2>

          <p className="mt-5 text-lg text-gray-700 dark:text-black max-w-2xl mx-auto">
            Get to know me, my background and what I enjoy building.
          </p>
        </div>

        {/* About Card */}
        <div
          className="
            mt-16
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
            p-10
            text-center
          "
        >
          <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

            I'm{" "}
            <span className="font-bold text-pink-600">
              Nandini Lovanshi
            </span>
            , an MCA student and{" "}
            <span className="font-semibold text-pink-600">
              React Developer
            </span>{" "}
            passionate about building responsive, scalable and user-friendly
            web applications.

            <br />
            <br />

            I have hands-on experience with{" "}
            <span className="font-semibold text-pink-600">
              React.js, JavaScript, Tailwind CSS, Node.js, Express.js and
              MongoDB
            </span>
            . I enjoy developing modern interfaces, creating reusable
            components, integrating REST APIs, and writing clean, maintainable
            code.

            <br />
            <br />

            My goal is to build high-quality applications that deliver an
            excellent user experience while continuously learning new
            technologies and best practices in web development.

          </p>
        </div>

      </div>
    </section>
  );
};

export default About;