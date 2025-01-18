import React from 'react';
import { X, Clock, Target, ChevronRight } from 'lucide-react';

const timelineData = [
  {
    time: "9:00 AM",
    speaker: "Dr. Sarah Johnson",
    title: "The Future of AI in Healthcare",
    description: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.",
    objective: "Understanding AI's impact on modern medicine",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400"
  },
  {
    time: "10:30 AM",
    speaker: "Prof. Michael Chen",
    title: "Sustainable Architecture",
    description: "Innovative approaches to creating eco-friendly urban spaces.",
    objective: "Reimagining sustainable urban development",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    time: "1:00 PM",
    speaker: "Emma Rodriguez",
    title: "Digital Privacy in 2024",
    description: "Understanding the importance of data protection in our connected world.",
    objective: "Empowering digital security awareness",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
  },
  {
    time: "2:30 PM",
    speaker: "Dr. James Wilson",
    title: "The Science of Happiness",
    description: "Research-based strategies for improving mental well-being.",
    objective: "Discovering keys to lasting happiness",
    image: "https://images.unsplash.com/photo-1454486837617-ce8e1ba5ebfe?auto=format&fit=crop&q=80&w=400"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-red-600/30">
        <div className="container mx-auto px-6 py-5">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Logo Placeholder */}
              <div className="w-14 h-14 bg-red-600 rounded-sm flex items-center justify-center">
                <X className="h-9 w-9 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter">TEDx</span>
                <span className="text-xs text-red-600 font-bold tracking-[0.2em] uppercase">NIIT University</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#" className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors uppercase">Home</a>
              <a href="#" className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors uppercase">Speakers</a>
              <a href="#" className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors uppercase">Schedule</a>
              <a href="#" className="text-xs font-bold tracking-widest px-6 py-3 border-2 border-red-600 rounded-sm hover:bg-red-600 transition-all uppercase">
                Register Now
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-red-600 rounded-sm flex items-center justify-center">
                <X className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              Event Schedule
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
              A day of revolutionary ideas, inspiring speakers, and transformative discussions.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {timelineData.map((event, index) => (
              <div key={index} className="relative mb-28 last:mb-0">
                {/* Connector Line */}
                {index < timelineData.length - 1 && (
                  <div className="absolute left-1/2 top-full h-28 w-px bg-gradient-to-b from-red-600 to-transparent hidden md:block timeline-connector">
                    <div className="absolute -left-1.5 top-1/2 w-4 h-4 bg-black border-2 border-red-600 rounded-full"></div>
                  </div>
                )}
                
                <div className={`flex flex-col md:flex-row items-stretch gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image Card */}
                  <div className="w-full md:w-1/2 group">
                    <div className="relative h-full overflow-hidden rounded-sm border border-red-600/20 transition-transform duration-500 group-hover:scale-[1.02]">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center space-x-3 text-red-500 font-mono text-sm mb-3">
                          <Clock className="h-4 w-4" />
                          <span className="tracking-wider">{event.time}</span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">{event.speaker}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="w-full md:w-1/2 flex flex-col">
                    <div className="h-full p-10 bg-black border border-red-600/20 rounded-sm transition-all duration-500 hover:border-red-600/40">
                      <h4 className="text-3xl font-bold text-red-600 mb-5 tracking-tight">{event.title}</h4>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed tracking-wide">{event.description}</p>
                      <div className="mt-auto">
                        <div className="flex items-center space-x-3 text-sm text-gray-400 border-t border-red-600/10 pt-5">
                          <Target className="h-4 w-4 text-red-600" />
                          <span className="font-medium tracking-wide">Key Objective:</span>
                          <span className="tracking-wide">{event.objective}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-red-600/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center">
                  <X className="h-7 w-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter">TEDx</span>
                  <span className="text-xs text-red-600 font-bold tracking-[0.2em] uppercase">NIIT University</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed tracking-wide text-sm">
                This independent TEDx event is operated under license from TED, bringing together thinkers and doers to share ideas worth spreading.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-8 tracking-tight">Quick Links</h4>
              <ul className="space-y-5">
                {['About TEDx', 'Past Events', 'Become a Speaker', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="group flex items-center text-gray-400 hover:text-red-600 transition-colors">
                      <ChevronRight className="h-4 w-4 mr-3 transition-transform group-hover:translate-x-1" />
                      <span className="text-sm tracking-wide">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-8 tracking-tight">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-4">
                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-5 py-3 text-xs font-bold tracking-widest text-gray-400 border border-red-600/20 rounded-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-center uppercase"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-red-600/10 text-center">
            <p className="text-gray-400 text-sm tracking-wide">&copy; {new Date().getFullYear()} TEDx NIIT University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;