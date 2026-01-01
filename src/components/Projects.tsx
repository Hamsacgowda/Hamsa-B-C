import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI Mock Interview System',
    description:
      'Intelligent interview platform leveraging advanced LLMs with real-time feedback, voice interaction via TTS/STT, and comprehensive admin dashboards for performance tracking.',
    tags: ['AI', 'LLM', 'Full Stack'],
    category: 'AI',
    features: [
      'Real-time AI-powered interview feedback',
      'Voice input/output integration',
      'Admin dashboard analytics',
      'Performance metrics tracking',
    ],
  },
  {
    id: '2',
    title: 'Brain Tumor Detection',
    description:
      'Advanced CNN-based deep learning model for medical imaging classification, accurately distinguishing between meningiomas and gliomas with high precision.',
    tags: ['Deep Learning', 'Medical AI', 'Python'],
    category: 'AI',
    features: [
      'CNN architecture optimization',
      'Medical imaging preprocessing',
      'High accuracy classification',
      'Data augmentation techniques',
    ],
  },
  {
    id: '3',
    title: 'Health Record Management System',
    description:
      'Secure, HIPAA-compliant patient record system built with MERN stack, featuring robust authentication, comprehensive CRUD operations, and intuitive data management.',
    tags: ['MERN', 'Full Stack', 'Security'],
    category: 'Web',
    features: [
      'Secure authentication system',
      'Complete CRUD operations',
      'Database encryption',
      'User role management',
    ],
  },
  {
    id: '4',
    title: 'Smart Task Organizer',
    description:
      'Collaborative task management platform with intelligent priority assignment, advanced filtering capabilities, and a clean, intuitive user interface for productivity.',
    tags: ['Productivity', 'React', 'Frontend'],
    category: 'Web',
    features: [
      'Smart priority algorithms',
      'Advanced filtering system',
      'Real-time collaboration',
      'Beautiful UI/UX design',
    ],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'AI', 'Web'];
  const filteredProjects =
    selectedCategory && selectedCategory !== 'All'
      ? projects.filter((p) => p.category === selectedCategory)
      : projects;

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 relative inline-block">
          Projects
          <div className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"></div>
        </h2>

        <div className="flex flex-wrap gap-3 mb-12 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-6 flex-1">{project.description}</p>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-gray-900">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-8 pb-8 flex gap-3 pt-6 border-t border-gray-100">
                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  <ExternalLink size={18} />
                  View Details
                </button>
                <button className="flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-900 transition-colors">
                  <Github size={18} />
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
