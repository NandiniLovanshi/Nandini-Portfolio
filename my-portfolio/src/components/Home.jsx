
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-white dark:bg-slate-900 pt-20 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

                    {/* Left Side */}
                    <div className="flex-1 text-center md:text-left">

                        <p className="text-black dark:text-white font-semibold text-lg mb-2 transition-colors duration-300"></p>

                        <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 dark:text-pink-600 leading-tight transition-colors duration-300">
                            Nandini
                            <span className="text-pink-600"> Lovanshi</span>
                        </h1>

                        <h2 className="mt-5 text-xl lg:text-2xl font-semibold text-gray-700 dark:text-white transition-colors duration-300">
                        React Developer | Frontend Developer
                        </h2>

                        <p className="mt-6 text-gray-600 dark:text-white text-lg leading-8 max-w-xl transition-colors duration-300">
                            Passionate about building scalable applications.
                        </p>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">

                            <a
                                href="#contact"
                                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition duration-300"
                            >
                                Contact Me
                            </a>

                            <a
                                href="/resume.pdf"
                                download="Nandini_Lovanshi_Resume.pdf"
                                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-full transition duration-300"
                            >
                                Download CV
                            </a>

                        </div>

                        {/* Social Icons */}

                        <div className="flex justify-center md:justify-start gap-5 mt-10">

                            <a
                                href="https://github.com/NandiniLovanshi"
                                target="_blank"
                                rel="noreferrer"
                                className="text-3xl text-gray-700 dark:text-white hover:text-pink-600 transition-all duration-300"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nandini-lovanshi-301462366"
                                target="_blank"
                                rel="noreferrer"
                                className="text-3xl text-gray-700 dark:text-white hover:text-pink-600 transition-all duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="mailto:example@gmail.com"
                                className="text-3xl text-gray-700 dark:text-white hover:text-pink-600 transition-all duration-300"
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="flex-1 flex justify-center">

                        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-3 border-pink-500 shadow-[0_0_10px_#ec4899,0_0_40px_#ec4899] hover:scale-105 transition-all duration-500">

                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Home;