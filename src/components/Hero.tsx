import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-900 mb-4 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Hamsa B C
            </span>
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-8">
          Software Developer • Python • AI • Full Stack
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Engineering student with strong foundations in Python, AI tools, and full-stack development.
          Passionate about building intelligent, scalable, real-world applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            View Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full text-lg hover:bg-blue-50 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">9.03</div>
            <div className="text-gray-600 text-sm">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">4+</div>
            <div className="text-gray-600 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">B.E.</div>
            <div className="text-gray-600 text-sm">VTU 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}
