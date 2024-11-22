import React from 'react';
import { Menu, Github, Mail, Code2, User, Briefcase, Cpu } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">馬場元岐</h1>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-800"
              >
                <Menu size={24} />
              </button>
            </div>
            <div className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none`}>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                {['about', 'projects', 'skills', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-600 hover:text-gray-800 capitalize w-full text-left md:w-auto"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              馬場元岐
            </h1>
            <p className="text-xl text-gray-600 mb-8">同志社大学 4回生</p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:m.bamba0332@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <User className="mr-2" /> About Me
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">専門性と興味分野</h3>
              <p className="text-gray-600 mb-6">
                AI、クラウドソーシングに特に興味があり、これらの分野で新しい価値を創造することを目指しています。
              </p>
              <h3 className="text-xl font-semibold mb-4">バックグラウンド</h3>
              <p className="text-gray-600">
                e-sportsプレイヤーとしての経験があり、競争と技術の融合に関心を持っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Code2 className="mr-2" /> Projects
            </h2>
            <div className="grid gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    NISlab HP改修プロジェクト
                  </h3>
                  <p className="text-gray-600 mb-4">
                    NISLabのHPを新しくデザインするプロジェクト。最新のWeb技術を活用し、
                    ユーザビリティとデザイン性の向上を実現しました。
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    ソフトウェアコンテスト
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Flip Homeというアプリのシステム設計に従事。
                    ユーザーフレンドリーなインターフェースと効率的なバックエンド処理を実現しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Cpu className="mr-2" /> Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">フロントエンド</h3>
                <div className="space-y-2">
                  {['HTML', 'CSS', 'JavaScript'].map((skill) => (
                    <div key={skill} className="flex items-center text-gray-600">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">バックエンド</h3>
                <div className="space-y-2">
                  {['Python', 'SQL'].map((skill) => (
                    <div key={skill} className="flex items-center text-gray-600">
                      <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">ツール</h3>
                <div className="space-y-2">
                  {['Git'].map((skill) => (
                    <div key={skill} className="flex items-center text-gray-600">
                      <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">その他</h3>
                <div className="space-y-2">
                  {['AWS'].map((skill) => (
                    <div key={skill} className="flex items-center text-gray-600">
                      <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="mr-2" /> Contact
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="mailto:m.bamba0332@gmail.com"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <Mail className="mr-2" size={20} />
                  m.bamba0332@gmail.com
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;