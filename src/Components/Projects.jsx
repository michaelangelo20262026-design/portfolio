function Projects() {
  const projects = [
    {
      number: "01",
      title: "Favour Store POS",
      description:
        "A full-stack point-of-sale system for managing products, sales, receipts, barcode scanning, and sales history.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      link: "https://walmart-xi.vercel.app/pos.html",
    },
    {
      number: "02",
      title: "Receipt Generator",
      description:
        "A web application for creating and generating professional receipts quickly and efficiently.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://receipt-generator-pink.vercel.app/",
    },
    {
      number: "03",
      title: "Movie React App",
      description:
        "A React-based movie application for exploring and viewing movie information through a modern interface.",
      technologies: ["React", "JavaScript", "API"],
      link: "https://movie-react-app-blue-iota.vercel.app",
    },
    {
      number: "04",
      title: "React Blog",
      description:
        "A React blog application for creating, displaying, and managing blog posts through a clean user interface.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://react-blog-gamma-amber.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-12rem] right-[-10rem] w-[32rem] h-[32rem] bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-14 md:mb-16 text-center md:text-left">
          <p className="text-[#2563EB] font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            My Projects
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#123B63] tracking-tight leading-tight mb-6">
            Things I've
            <span className="block text-[#2563EB]">built.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A selection of projects I've built while developing my skills and
            experience as a Full-Stack Web Developer.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-sm font-semibold tracking-widest text-[#2563EB] group-hover:tracking-[0.3em] transition-all duration-300">
                  {project.number}
                </span>

                <span className="text-2xl text-gray-300 group-hover:text-[#2563EB] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#123B63] mb-4 group-hover:text-[#2563EB] transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-7">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#123B63] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#2563EB] hover:-translate-y-0.5 transition-all duration-300"
              >
                View Live Project
                <span className="text-lg">↗</span>
              </a>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#2563EB] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
