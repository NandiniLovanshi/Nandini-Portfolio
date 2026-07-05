function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-10 py-20"
    >
      <div className="max-w-5xl">

        {/* Heading */}
        <h4 className="text-cyan-400 text-xl font-semibold text-center mb-3">
          ABOUT ME
        </h4>

        
{/* Introduction */}
<p className="text-gray-300 text-[18px] leading-10 text-center max-w-4xl mx-auto mb-14">
  Hello! I'm{" "}
  <span className="text-cyan-400 font-bold">Nandini Lovanshi</span>, a
  passionate{" "}
  <span className="text-cyan-400 font-semibold">
    Frontend & React Developer
  </span>{" "}
  dedicated to building modern, responsive, and user-friendly web applications.
  I enjoy transforming creative ideas into interactive digital experiences using{" "}
  <span className="text-cyan-400 font-semibold">
    HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Express.js, MongoDB,
    and REST APIs
  </span>
  . I continuously explore new technologies, write clean and maintainable code,
  and focus on creating fast, visually appealing, and intuitive web applications
  that deliver an excellent user experience.
</p>
        

        

      </div>
    </section>
  );
}

export default About;