import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SponsorSlider from './components/SponsorSlider';

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-ted-black text-white py-32 hero-pattern relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Support <span className="gradient-text">Innovation</span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-ted-red font-bold mb-12"
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            TEDxNIITUniversity
          </motion.p>
          <motion.button 
            className="bg-ted-red text-white px-12 py-4 rounded-xl text-xl font-bold hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Sponsor
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-24">
        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-ted-black">Partner With Us</h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Join us in our mission to share powerful ideas and inspire the next generation of innovators. 
              Your support makes it possible to bring thought-provoking talks and meaningful discussions to our community.
            </p>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Current Partners */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-ted-black">Our Partners</h2>
            <SponsorSlider />
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-ted-black">Why Partner With Us?</h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Brand Impact",
                description: "Connect with an engaged audience of innovators, leaders, and change-makers from across the region."
              },
              {
                title: "Community",
                description: "Support the spread of innovative ideas and contribute to the growth of our educational ecosystem."
              },
              {
                title: "Recognition",
                description: "Gain visibility and recognition as a supporter of ideas worth spreading in our community."
              }
            ].map((benefit, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div 
                  className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-ted-black">{benefit.title}</h3>
                  <p className="text-lg md:text-xl text-gray-700">{benefit.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-ted-black text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-10">Let's Create Impact Together</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to make a difference? Contact us to discuss partnership opportunities 
              for TEDxNIITUniversity.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
              <motion.button 
                className="bg-ted-red text-white px-12 py-4 rounded-xl text-xl font-bold hover:bg-red-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              <motion.button 
                className="bg-white text-ted-black px-12 py-4 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ted-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-400">© 2024 TEDxNIITUniversity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;