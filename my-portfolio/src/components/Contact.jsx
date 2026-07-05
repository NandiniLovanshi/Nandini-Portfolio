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
      className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-14">
          Let's{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Connect!!!
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-cyan-400 shadow-lg transition-all duration-500">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 mb-5 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white outline-none border border-gray-300 dark:border-slate-600 focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 mb-5 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white outline-none border border-gray-300 dark:border-slate-600 focus:border-cyan-400 transition"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 mb-6 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white outline-none border border-gray-300 dark:border-slate-600 focus:border-cyan-400 resize-none transition"
            ></textarea>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
              Send Message
            </button>

          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">

            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              You can also find me here
            </h3>

            <div className="space-y-6">

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500 p-3 sm:p-4 rounded-full text-white">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    +91 XXXXXXXXXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500 p-3 sm:p-4 rounded-full text-white">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email</h4>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=lovanshinandini42@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition duration-300 break-all"
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
                <div className="bg-cyan-500 p-3 sm:p-4 rounded-full text-white">
                  <FaLinkedin size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
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
                <div className="bg-cyan-500 p-3 sm:p-4 rounded-full text-white">
                  <FaGithub size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">GitHub</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-all">
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