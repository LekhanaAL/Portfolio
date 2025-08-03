import { useState, useEffect } from 'react';
import './index.css';
import { 
  EnvelopeIcon, 
  MapPinIcon,
  GlobeAltIcon,
  BeakerIcon,
  ServerIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import avatar from './assets/react.svg';

// My projects
const projects = [
  {
    id: 'yas-connect',
    title: 'YAS Connect',
    role: 'Full Stack Developer',
    period: 'June 2025 – Present',
    type: 'Community Platform',
    description: 'Built a community platform for devotees with interactive mapping and real-time features. Focused on creating a seamless user experience with privacy-first design.',
    highlights: [
      'Developed with Next.js, TypeScript, Tailwind CSS, Supabase, and Mapbox',
      'Implemented interactive devotee map with geolocation and privacy controls',
      'Solved API rate limiting issues with smart caching and upsert logic',
      'Delivered MVP in 1 week with continuous improvements based on user feedback',
      'Used AI tools (ChatGPT, Cursor) for code generation and debugging'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Mapbox', 'OpenStreetMap'],
    color: 'from-blue-500 to-indigo-600',
    icon: GlobeAltIcon
  },
  {
    id: 'dev-pulse',
    title: 'Dev Pulse',
    role: 'Backend Engineer',
    period: 'June 2025 – Present',
    type: 'Developer Dashboard',
    description: 'Created a microservices-based dashboard for tracking developer workflows. Built with scalability and observability in mind.',
    highlights: [
      'Architected microservices using Go, MongoDB, PostgreSQL, Docker',
      'Designed API gateway with NATS messaging for reliable communication',
      'Integrated Prometheus and Grafana for monitoring and alerting',
      'Optimized performance with database indexing and connection pooling',
      'Leveraged AI tools for architecture decisions and problem-solving'
    ],
    tech: ['Go', 'MongoDB', 'PostgreSQL', 'Docker', 'NATS', 'Prometheus', 'Grafana', 'Helm'],
    color: 'from-emerald-500 to-teal-600',
    icon: ServerIcon
  },
  {
    id: 'travel-chatbot',
    title: 'Travel Chatbot',
    role: 'AI Engineer',
    period: '2025',
    type: 'AI Travel Assistant',
    description: 'Developed an intelligent chatbot for travel planning using advanced AI techniques. Focused on creating autonomous research capabilities.',
    highlights: [
      'Built with FastAPI, GPT-3/4, LangChain, ChromaDB, FAISS',
      'Created intelligent itinerary planning and information retrieval system',
      'Implemented agentic workflows for autonomous research',
      'Built robust RAG pipelines for accurate information retrieval',
      'Designed scalable architecture for complex travel queries'
    ],
    tech: ['FastAPI', 'GPT-3/4', 'LangChain', 'ChromaDB', 'FAISS', 'Python'],
    color: 'from-purple-500 to-pink-600',
    icon: BeakerIcon
  }
];

const skills = {
  languages: ['C', 'Java', 'Python', 'SQL', 'TypeScript', 'JavaScript'],
  web: ['React', 'Next.js', 'Tailwind CSS', 'Chakra UI', 'Mapbox GL JS'],
  backend: ['FastAPI', 'Gin', 'Docker', 'PostgreSQL', 'MongoDB'],
  ai: ['TensorFlow', 'Keras', 'OpenCV', 'LangChain', 'ChromaDB'],
  devops: ['Docker', 'Prometheus', 'Grafana', 'NATS', 'Vercel'],
  tools: ['Git', 'GitHub', 'PeerJS', 'Supabase']
};

const education = [
  {
    institution: 'JSS Science and Technology University',
    degree: 'Bachelor of Engineering – Computer Science',
    period: 'Aug 2021 – Jul 2025',
    location: 'Mysuru, India',
    cgpa: '8.65 / 10',
    electives: ['Automotive Instrumentation', 'Software Testing', 'Bio For Engineers']
  },
  {
    institution: 'Expert PU College',
    degree: 'Pre-University (PCMB)',
    period: '2019 – 2021',
    location: 'Mangalore, India',
    score: '97.6%'
  },
  {
    institution: 'Ananth International School',
    degree: 'ICSE (Secondary Education)',
    period: '2006 – 2019',
    location: 'Arsikere, India',
    score: '96.7%'
  }
];

const achievements = [
  { label: 'Google Girl Hackathon 2024', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { label: 'Chief Coordinator, Linux Club', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { label: '8+ Projects Built', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={darkMode ? 'dark bg-neutral-950 text-neutral-100 font-sans' : 'bg-neutral-50 text-neutral-900 font-sans'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Lekhana A L
              </h2>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'projects', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              onClick={() => setDarkMode(dm => !dm)}
            >
              {darkMode ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-300 dark:border-blue-700 shadow-2xl mb-8 bg-white/60 dark:bg-neutral-900/60">
              <img src={avatar} alt="Lekhana A L" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-neutral-800 via-blue-700 to-indigo-800 dark:from-neutral-100 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Lekhana A L
            </h1>
            <p className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-300 mb-4">
              Software Engineer
            </p>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
              I build software that solves real problems. Currently working on full-stack applications, 
              backend systems, and AI-powered solutions. Always learning new technologies.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {achievements.map((achievement, idx) => (
                <span key={idx} className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${achievement.color}`}>
                  {achievement.label}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-500 dark:text-neutral-400">
              <MapPinIcon className="w-5 h-5" />
              <span>Mysuru, Karnataka, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Here are some projects I've worked on recently
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Project Visual */}
                  <div className={`flex-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${project.color} p-1`}>
                      <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                          <Icon className="w-24 h-24 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-neutral-600 dark:text-neutral-300">{project.type}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <button className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition">
                            <EyeIcon className="w-6 h-6 text-white" />
                          </button>
                          <button className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition">
                            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`flex-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full">
                            {project.role}
                          </span>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            {project.period}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">What I built</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-neutral-600 dark:text-neutral-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                          <EyeIcon className="w-5 h-5" />
                          View Project
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300">
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Skills
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Technologies and tools I use to build things
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-2xl font-bold mb-6 capitalize text-blue-600 dark:text-blue-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              My academic background
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {edu.institution}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-2">
                  {edu.degree}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {edu.location}
                </p>
                {edu.cgpa && (
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                    CGPA: {edu.cgpa}
                  </p>
                )}
                {edu.score && (
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                    Score: {edu.score}
                  </p>
                )}
                {edu.electives && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-2">Electives:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.electives.map((elective, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/50 dark:bg-neutral-700/50 text-neutral-700 dark:text-neutral-300 rounded-full text-sm">
                          {elective}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get in touch
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
              <EnvelopeIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:lekhanaal@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                lekhanaal@gmail.com
              </a>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
              <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-neutral-600 dark:text-neutral-300">Mysuru, Karnataka, India</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/Lekhanaal1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/lekhana-a-1-6161b722a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://g.dev/Lekhana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300">
              <GlobeAltIcon className="w-5 h-5" />
              Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Lekhana A L. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Smooth scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

export default App; 