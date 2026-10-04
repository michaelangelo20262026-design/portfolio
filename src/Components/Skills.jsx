function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-[#07182D] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-12rem] left-[-10rem] w-[32rem] h-[32rem] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-12rem] right-[-10rem] w-[32rem] h-[32rem] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-14 md:mb-16 text-center md:text-left">
          <p className="text-blue-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            My Skills
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Technologies I use to
            <span className="block text-blue-400">build great products.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            I use modern technologies and development tools to create
            responsive, functional, and scalable web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Frontend */}
          <div className="group p-7 md:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-400/30 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xl font-bold mb-7 mx-auto md:mx-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/40 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
              01
            </div>

            <h3 className="text-2xl font-bold text-white mb-5 text-center md:text-left">
              Frontend
            </h3>

            <p className="text-gray-400 leading-relaxed text-center md:text-left">
              HTML, CSS, JavaScript, React, Tailwind CSS
            </p>
          </div>

          {/* Backend */}
          <div className="group p-7 md:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-400/30 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xl font-bold mb-7 mx-auto md:mx-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/40 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
              02
            </div>

            <h3 className="text-2xl font-bold text-white mb-5 text-center md:text-left">
              Backend
            </h3>

            <p className="text-gray-400 leading-relaxed text-center md:text-left">
              Node.js, Express, MongoDB
            </p>
          </div>

          {/* Tools */}
          <div className="group p-7 md:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-400/30 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xl font-bold mb-7 mx-auto md:mx-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/40 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
              03
            </div>

            <h3 className="text-2xl font-bold text-white mb-5 text-center md:text-left">
              Tools
            </h3>

            <p className="text-gray-400 leading-relaxed text-center md:text-left">
              Git, GitHub, VS Code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
