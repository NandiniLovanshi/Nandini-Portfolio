import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nandini",
        "template_4n53hcj",
        form.current,
        "sdi3lYRMrMAMpUkH4"
      )
      .then(
  () => {
    alert("✅ Message sent successfully!");
    form.current.reset();
  },
  (error) => {
    console.log("EmailJS Error:", error);
    alert(error.text || error.message);
  }
);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f9d7df] via-[#f7cfd8] to-[#f5c8d2] dark:from-slate-800 dark:to-black transition-all duration-300"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Contact <span className="text-black dark:text-white">Me</span>
          </h2>

          <p className="mt-5 text-lg text-gray-700 dark:text-black max-w-2xl mx-auto">
            Feel free to get in touch. I'm always open to discussing new
            opportunities and exciting projects.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Card */}
          <div
            className="
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
              p-8
            "
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
              Let's Connect
            </h3>

            {/* Email */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                <FaEnvelope className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>
                <a
                  href="mailto:lovanshinandini42@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Nandini,"
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-600"
                >
                  lovanshinandini42@gmail.com
                </a>

              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </h4>

                <a
                  href="tel:+916267643021"
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-600"
                >
                  +91 6267643021
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Location
                </h4>

                <p className="text-gray-700 dark:text-gray-300">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="https://github.com/NandiniLovanshi"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white border border-pink-300 flex items-center justify-center text-2xl text-gray-900 hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nandini-lovanshi-301462366"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white border border-pink-300 flex items-center justify-center text-2xl text-gray-900 hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="
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
              p-8
            "
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-2xl border border-pink-300 bg-white outline-none focus:ring-2 focus:ring-pink-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-2xl border border-pink-300 bg-white outline-none focus:ring-2 focus:ring-pink-500"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-2xl border border-pink-300 bg-white resize-none outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-pink-500
                  to-rose-500
                  hover:from-pink-600
                  hover:to-rose-600
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;