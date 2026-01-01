export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 relative inline-block">
          About Me
          <div className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"></div>
        </h2>

        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am a B.E. Information Science student at VTU, graduating in 2026, with a strong CGPA of <span className="font-bold text-blue-600">9.03</span>.
            My passion lies in developing AI-powered systems, working with LLM-based applications, and creating modern full-stack web solutions that solve real-world problems.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I specialize in leveraging cutting-edge AI technologies and building scalable architectures.
            My experience spans from prompt engineering and API integration to full-stack application development,
            with a focus on delivering production-ready code and exceptional user experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Technical Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-600">Skill Categories</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Committed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
