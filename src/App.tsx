import React, { useState } from 'react';
import { Palmtree, Leaf, Award, Calendar, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, agreed });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            opacity: '0.4'
          }}
        />
        
        <nav className="relative z-10 flex justify-between items-center px-8 py-6">
          <div className="text-2xl font-light tracking-wider">BLOOMING HAUS</div>
          <div className="flex gap-8 text-sm tracking-wider">
            <a href="#about" className="hover:text-gold-400 transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-gold-400 transition-colors">EXPERIENCE</a>
            <a href="#terms" className="hover:text-gold-400 transition-colors">TERMS</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">
            Redefine Luxury with Sustainability
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto tracking-wide text-gray-300">
            Win a bespoke eco-conscious getaway, crafted exclusively for those who value sophistication and the planet
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm border border-gray-500 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 px-6 py-2 bg-[#C4A862] hover:bg-[#B39752] text-black rounded-full transition-colors"
              >
                Enter Now
              </button>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 border-gray-500 rounded focus:ring-[#C4A862]"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the terms and conditions
              </label>
            </div>
          </form>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Palmtree className="w-12 h-12 mx-auto mb-6 text-[#C4A862]" />
            <h3 className="text-xl mb-4">Eco-Luxury Resort</h3>
            <p className="text-gray-400">Experience sustainable luxury in harmony with nature</p>
          </div>
          <div className="text-center">
            <Leaf className="w-12 h-12 mx-auto mb-6 text-[#C4A862]" />
            <h3 className="text-xl mb-4">Sustainable Living</h3>
            <p className="text-gray-400">Immerse yourself in eco-conscious practices</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-6 text-[#C4A862]" />
            <h3 className="text-xl mb-4">Premium Experience</h3>
            <p className="text-gray-400">Curated moments of unparalleled luxury</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-light tracking-wider">The Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square">
              <img
                src="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Luxury eco resort"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square">
              <img
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable luxury"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-light tracking-wider">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-6 text-[#C4A862]" />
              <h3 className="text-xl mb-2">Entry Deadline</h3>
              <p className="text-gray-400">March 31, 2024</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-6 text-[#C4A862]" />
              <h3 className="text-xl mb-2">Winner Announcement</h3>
              <p className="text-gray-400">April 15, 2024</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-6 text-[#C4A862]" />
              <h3 className="text-xl mb-2">Experience Date</h3>
              <p className="text-gray-400">May 1-7, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-400">
            © 2024 BLOOMING HAUS. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#C4A862]">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C4A862]">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C4A862]">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;