import React, { useState, useEffect, useRef } from 'react';
import { Palmtree, Leaf, Award, Calendar, Instagram, Facebook, Linkedin, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      title: "Luxury Eco-Resort Experience",
      description: "Immerse yourself in sustainable luxury"
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      title: "Exclusive Getaway",
      description: "Experience nature in its purest form"
    },
    {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      title: "Premium Wellness Retreat",
      description: "Rejuvenate your mind and body"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const defaultBgImage = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, agreed });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-offwhite">
      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url("${hoveredImage || defaultBgImage}")`,
            opacity: '0.4'
          }}
        />
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between items-center py-6">
              <div className="h-6 sm:h-8">
                <svg viewBox="0 0 500 44.76" className="h-full">
                  <path
                    fill="currentColor"
                    d="M0,42.99l4.38-3.41V4.32L0,.91h20.3c9.16,0,15.98,4.32,15.98,10.01,0,4.89-4.49,8.53-11.89,9.61v.63c8.08,1.19,13.36,5.17,13.42,10.58.06,6.77-7.39,11.26-17.91,11.26H0ZM11.49,20.36h8.47c5.29,0,8.99-3.87,8.99-9.44,0-5.23-3.64-8.81-9.1-8.81h-8.36v18.25ZM11.49,41.8h8.08c7.22,0,10.75-5.06,10.75-10.18s-3.53-10.12-10.69-10.12h-8.13v20.3Z M39.83,42.99l4.38-3.24V4.04l-4.38-3.13h16.66l-5.17,3.13v37.65h15.3l8.7-13.88-1.65,14.1v1.08h-33.84Z M78.1,21.61c0-11.89,9.78-21.61,21.44-21.61s21.5,9.72,21.5,21.61-9.89,22.06-21.5,22.06-21.44-9.9-21.44-22.06ZM113.3,21.61c0-12.57-5.17-20.36-13.76-20.36s-13.76,7.62-13.76,20.36,5.23,20.81,13.76,20.81,13.76-7.68,13.76-20.81Z M124.39,21.61c0-11.89,9.78-21.61,21.44-21.61s21.5,9.72,21.5,21.61-9.9,22.06-21.5,22.06-21.44-9.9-21.44-22.06ZM159.6,21.61c0-12.57-5.17-20.36-13.76-20.36s-13.76,7.62-13.76,20.36,5.23,20.81,13.76,20.81,13.76-7.68,13.76-20.81Z M194.1,44.76l-18.03-37.82h-.57v32.81l6.03,3.24h-13.48l6.03-3.24V4.32l-4.66-3.41h11.72l15.64,32.7h.8L211.56.91h11.2l-4.44,3.13v35.83l4.44,3.13h-15.92l4.38-3.13V6.94h-.68l-16.43,37.82Z M229.81,39.86V4.04l-4.38-3.13h15.92l-4.44,3.13v35.83l4.44,3.13h-15.92l4.38-3.13Z M283.39,44.76l-31.51-36.79h-.68v31.62l6.03,3.41h-13.48l6.03-3.41V5.46l-4.44-4.38,9.67-.8,26.16,30.6h.74V4.32l-6.03-3.41h13.53l-6.03,3.41v40.43Z M330.16,43.9l-4.55-4.44c-3.58,2.62-8.7,4.21-13.65,4.21-12.11,0-22.12-9.9-22.12-22.06S300.02,0,312.59,0c5.12,0,10.69,1.02,13.88,2.62v.91l1.54,11.2c-4.55-8.87-8.7-13.53-15.52-13.48-8.99,0-14.9,8.3-14.9,20.36s5.8,20.81,14.56,20.81c4.89,0,9.27-3.07,11.03-8.19v-11.43h-9.44v-1.19h20.81l-4.38,3.36v18.94Z M346.25,42.99l5.23-2.45,8.87-36.79-3.87-2.45h14.16l-6.31,2.45-3.87,16.04h22.18l3.81-16.04-5.35-2.45h14.56l-5.23,2.45-8.87,36.79,3.87,2.45h-14.1l6.26-2.45,4.78-19.73h-22.12l-4.78,19.73,5.35,2.45h-14.56Z M387.95,42.99l5.4-2.5,27.24-35.94-.57-3.13,4.55-.74v39.86l5.52,2.45h-15.92l6.54-2.45v-12.57h-16.43l-9.38,12.57,5.63,2.45h-12.57ZM405.07,26.96h15.64V6.77h-.51l-15.13,20.19Z M441.05,4.04l-3.87-2.73h13.02l-5.17,2.73-6.08,25.48c-1.65,6.71,2.62,11.71,9.95,11.71,6.88,0,13.25-4.89,14.79-11.49l6.14-25.7-4.09-2.73h11.2l-5.69,2.73-6.2,25.93c-1.88,7.85-9.5,13.71-17.8,13.71-8.93,0-14.33-5.57-12.57-13.08l6.37-26.56Z M471.11,39.98l.97-9.95c.74,8.02,4.78,12.57,11.09,12.57,5.12.06,8.64-3.47,8.64-8.7,0-8.7-14.1-12.28-14.1-22.01,0-6.71,5.52-11.32,12.51-11.32,3.41,0,7.11,1.08,9.78,2.73l-.23.97-.63,9.44c-1.19-8.13-4.55-12.06-9.61-12.06s-8.59,3.53-8.59,8.42c0,8.64,14.27,12.28,14.27,22.35,0,6.65-5.35,11.37-13.08,11.26-4.21-.06-8.59-1.14-11.2-2.79l.17-.91Z"
                  />
                </svg>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-brand-grey hover:text-brand-offwhite"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <div className="hidden md:flex gap-8 text-sm tracking-wider">
                <a href="#about" className="text-brand-grey hover:text-brand-gold transition-colors">ABOUT</a>
                <a href="#experience" className="text-brand-grey hover:text-brand-gold transition-colors">EXPERIENCE</a>
                <a href="#terms" className="text-brand-grey hover:text-brand-gold transition-colors">TERMS</a>
              </div>
            </nav>

            {mobileMenuOpen && (
              <div className="md:hidden absolute inset-x-0 top-20 bg-brand-black/95 backdrop-blur-sm py-4">
                <div className="flex flex-col items-center gap-4 text-sm tracking-wider">
                  <a href="#about" className="text-brand-grey hover:text-brand-gold transition-colors py-2">ABOUT</a>
                  <a href="#experience" className="text-brand-grey hover:text-brand-gold transition-colors py-2">EXPERIENCE</a>
                  <a href="#terms" className="text-brand-grey hover:text-brand-gold transition-colors py-2">TERMS</a>
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 flex items-center py-8 md:py-0">
            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8">
                <div className="flex flex-col justify-center">
                  <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-7xl font-light mb-6 tracking-wider">
                    Redefine Luxury with Sustainability
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 md:mb-12 max-w-3xl tracking-wide text-brand-grey">
                    Win a bespoke eco-conscious getaway, crafted exclusively for those who value sophistication and the planet
                  </p>
                  
                  <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-brand-black/30 backdrop-blur-sm border border-brand-grey rounded-full text-brand-offwhite placeholder-brand-grey focus:outline-none focus:border-brand-gold transition-colors"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-brand-gold hover:bg-opacity-90 text-brand-black rounded-full transition-colors text-sm sm:text-base"
                      >
                        Enter Now
                      </button>
                    </div>
                    
                    <div className="mt-4 flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-4 w-4 border-brand-grey rounded focus:ring-brand-gold mt-1"
                        required
                      />
                      <label htmlFor="terms" className="text-base text-brand-grey">
                        I agree to the terms and conditions
                      </label>
                    </div>
                    <a href="#terms" className="block mt-2 text-base text-brand-grey hover:text-brand-gold underline">
                      Ends on March 30th at Midnight BST
                    </a>
                  </form>
                </div>
                
                <div className="relative flex items-center justify-center order-first lg:order-last">
                  <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                    <div 
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg transform -rotate-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredImage("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80")}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                        alt="Luxury Destination 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg transform translate-x-12 md:translate-x-20 animate-float-slow hover:scale-105 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredImage("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80")}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                        alt="Luxury Destination 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div 
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg transform -translate-x-12 md:-translate-x-20 -translate-y-8 hover:scale-105 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredImage("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80")}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                        alt="Luxury Destination 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <Palmtree className="w-12 h-12 mx-auto mb-6 text-brand-gold" />
            <h3 className="font-cinzel text-xl mb-4">Eco-Luxury Resort</h3>
            <p className="text-brand-grey">Experience sustainable luxury in harmony with nature</p>
          </div>
          <div className="text-center">
            <Leaf className="w-12 h-12 mx-auto mb-6 text-brand-gold" />
            <h3 className="font-cinzel text-xl mb-4">Sustainable Living</h3>
            <p className="text-brand-grey">Immerse yourself in eco-conscious practices</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-6 text-brand-gold" />
            <h3 className="font-cinzel text-xl mb-4">Premium Experience</h3>
            <p className="text-brand-grey">Curated moments of unparalleled luxury</p>
          </div>
        </div>
      </section>

      {/* Experience Section with Carousel */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 font-light tracking-wider">
            The Experience
          </h2>
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            ref={carouselRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full relative aspect-video">
                  <img
                    src={`${image.url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80`}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="font-cinzel text-2xl mb-4">{image.title}</h3>
                    <p className="text-lg mb-6">{image.description}</p>
                    <button className="px-8 py-3 bg-brand-gold text-brand-black rounded-full hover:bg-opacity-90 transition-colors">
                      Enter Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-brand-gold' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 font-light tracking-wider">
            Important Dates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-6 text-brand-gold" />
              <h3 className="font-cinzel text-xl mb-2">Entry Deadline</h3>
              <p className="text-brand-grey">March 31, 2024</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-6 text-brand-gold" />
              <h3 className="font-cinzel text-xl mb-2">Winner Announcement</h3>
              <p className="text-brand-grey">April 15, 2024</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-6 text-brand-gold" />
              <h3 className="font-cinzel text-xl mb-2">Experience Date</h3>
              <p className="text-brand-grey">May 1-7, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-grey/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-sm text-center md:text-left text-brand-grey">
            © 2024 BLOOMING HAUS. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/bloominghaus/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-grey hover:text-brand-gold transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/bloominghaus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-grey hover:text-brand-gold transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/blooming-haus/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-grey hover:text-brand-gold transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;