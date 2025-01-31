import {
  Code,
  Database,
  FileJson,
  Globe,
  Layout,
  Server,
  Terminal,
  Type
} from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: 'Globe',
    category: 'frontend'
  },
  {
    name: 'CSS3',
    icon: 'Layout',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: 'FileJson',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: 'Type',
    category: 'frontend'
  },
  {
    name: 'React.js',
    icon: 'Code',
    category: 'frontend'
  },
  {
    name: 'Node.js',
    icon: 'Server',
    category: 'backend'
  },
  {
    name: 'Express',
    icon: 'Server',
    category: 'backend'
  },
  {
    name: 'SQL',
    icon: 'Database',
    category: 'backend'
  },
  {
    name: 'Git',
    icon: 'Terminal',
    category: 'tools'
  }
];

const iconMap = {
  Globe,
  Layout,
  FileJson,
  Type,
  Code,
  Server,
  Database,
  Terminal
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6 cursor-default">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <div
                key={skill.name}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}