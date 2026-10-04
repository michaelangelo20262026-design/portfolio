import { Link } from "react-router-dom";
import Michael from "../assets/michael.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-73px)] flex items-center px-6 md:px-12 py-16 md:py-20 overflow-hidden bg-[#07182D]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-12rem] left-[-8rem] w-[32rem] h-[32rem] bg-[#2563EB]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-12rem] right-[-8rem] w-[32rem] h-[32rem] bg-[#2563EB]/15 blur-[120px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/5 blur-[100px] rounded-full"></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-14 lg:gap-20">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-200 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Full-Stack Web Developer
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
              Michael
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6">
            I build digital experiences that work.
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-9 mx-auto md:mx-0">
            I build modern, responsive websites, web applications, and landing
            pages with a focus on clean design, functionality, and great user
            experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white px-7 py-3.5 rounded-xl font-semibold shadow-xl shadow-blue-600/20 hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              View My Projects
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/20 bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold backdrop-blur-sm hover:bg-white hover:text-[#07182D] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center md:justify-end">
          {/* Outer Glow */}
          <div className="absolute w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem] md:w-[30rem] md:h-[30rem] bg-blue-500/10 blur-[70px] rounded-full"></div>

          {/* Image Frame */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-blue-400/20"></div>

            <div className="absolute -inset-6 rounded-[2.5rem] border border-white/5"></div>

            <img
              src={Michael}
              alt="Michael"
              className="relative w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[30rem] md:h-[30rem] object-cover rounded-[2rem] shadow-2xl shadow-blue-900/50"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>

        <span className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1">
          <span className="w-1 h-1.5 rounded-full bg-blue-400 animate-bounce"></span>
        </span>
      </div>
    </section>
  );
}

export default Hero;
