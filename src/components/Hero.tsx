import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Olá, eu sou o{' '}
              <span className="text-blue-600">Íkaro Almeida</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Desenvolvedor Web apaixonado por criar experiências digitais incríveis e funcionais.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Fale Comigo
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
              >
                Ver Projetos
              </a>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/ikruuu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/%C3%ADkaro-almeida-79b993259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src='src/img/EOF_5474.jpg'
              alt="Íkaro Almeida"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}