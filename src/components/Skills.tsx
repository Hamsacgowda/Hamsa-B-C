import { Code2, Brain, Globe, Database } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C'],
  },
  {
    icon: Brain,
    title: 'AI & Data',
    skills: ['ChatGPT & Gemini APIs', 'Prompt Engineering', 'Data Parsing & Cleaning', 'LLM Integration'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    skills: ['HTML, CSS', 'React', 'Next.js', 'Node.js', 'Express'],
  },
  {
    icon: Database,
    title: 'Tools & Databases',
    skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'UiPath'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 relative inline-block">
          Skills
          <div className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-amber-100 transition-colors">
                  <Icon size={24} className="text-blue-600 group-hover:text-amber-600 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
