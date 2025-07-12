import { BookOpen, Calendar, Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sou um desenvolvedor web de 18 anos, atualmente cursando Ciência da Computação na
              Universidade Federal do Ceará. Com 2 anos de experiência no desenvolvimento web,
              tenho paixão por criar soluções inovadoras e interfaces intuitivas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Desenvolvedor Web
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">2 anos de experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Ciência da Computação
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">UFC</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    19 anos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Itapiúna, CE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>HTML5 & CSS3</li>
                <li>JavaScript/TypeScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>RESTful APIs</li>
                <li>Git & GitHub</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}