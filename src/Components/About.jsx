function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10rem] right-[-10rem] w-[30rem] h-[30rem] bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-[#2563EB] font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#123B63] tracking-tight leading-tight">
              Turning ideas into
              <span className="block text-[#2563EB]">digital experiences.</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="group space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I'm a Full-Stack Web Developer passionate about building modern,
              responsive websites, web applications, and landing pages.
            </p>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              I enjoy taking ideas and turning them into functional,
              user-friendly digital experiences. I focus on writing clean code,
              creating responsive interfaces, and building applications that are
              both practical and enjoyable to use.
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
