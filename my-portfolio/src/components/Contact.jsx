import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-20 px-8 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Let's <span className="text-cyan-500 dark:text-cyan-400">Connect!!!</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-slate-800 p-8 rounded-2xl border border-cyan-400 shadow-lg transition-all duration-500">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-5 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white outline-none border border-gray-300 dark:border-slate-600 focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-5 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white outline-none border border-gray-300 dark:border-slate-600 focus:border-cyan-400 transition"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 mb-6 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white outline-none border border-gray-300 dark:border-slate-600 focus:border-cyan-400 resize-none transition"
            ></textarea>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Send Message
            </button>

          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">

            <h3 className="text-2xl font-bold mb-8">
              You can also find me here
            </h3>

            <div className="space-y-7">

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500 p-4 rounded-full text-white">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    +91 XXXXXXXXXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500 p-4 rounded-full text-white">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=lovanshinandini42@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition duration-300"
                  >
                    lovanshinandini42@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/your-linkedin-username/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-500 transition duration-300"
              >
                <div className="bg-cyan-500 p-4 rounded-full text-white">
                  <FaLinkedin size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nandini Lovanshi
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/NandiniLovanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-500 transition duration-300"
              >
                <div className="bg-cyan-500 p-4 rounded-full text-white">
                  <FaGithub size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    github.com/NandiniLovanshi
                  </p>
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;