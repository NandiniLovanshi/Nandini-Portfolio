const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-gray-50 dark:bg-slate-950 transition-all duration-300"
        >
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-black dark:text-white">
                    About <span className="text-pink-600">Me</span>
                </h2>

                <p className="mt-8 text-lg leading-9 text-gray-700 dark:text-white">
                    I'm <span className="font-semibold text-pink-600">Nandini Lovanshi</span>,
                    an MCA student and React Developer passionate about building
                    responsive, scalable, and high-performance web applications. Skilled in
                    MongoDB, Express.js, React.js, and Node.js, I enjoy creating clean user
                    interfaces, developing robust backend APIs, and continuously learning modern
                    web technologies to deliver efficient and user-focused solutions.
                </p>

            </div>
        </section>
    );
};

export default About;