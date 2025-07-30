import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechStart",
    company: "TechStart Inc.",
    image: "/public/testimonials/sarah.jpg",
    quote: "Working with fff transformed our entire product strategy. Their design thinking and technical expertise helped us launch 3x faster than anticipated.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "InnovateNow",
    image: "/public/testimonials/marcus.jpg",
    quote: "The team at fff doesn't just build products—they craft experiences. Our user engagement increased by 250% after their redesign.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "ScaleUp Solutions",
    image: "/public/testimonials/emily.jpg",
    quote: "From MVP to market leader in 8 months. fff's strategic approach and execution made the impossible possible.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim", 
    role: "CTO",
    company: "NextGen Labs",
    image: "/public/testimonials/david.jpg",
    quote: "Their technical depth combined with design excellence is rare. They delivered a platform that scales beautifully.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Head of Design",
    company: "CreativeFlow",
    image: "/public/testimonials/lisa.jpg",
    quote: "fff raised the bar for what we thought was possible. The attention to detail and user experience is unmatched.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-black text-white py-14 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 uppercase tracking-wider mb-4 sm:mb-6 text-xs sm:text-sm">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with fff.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col-reverse sm:flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Quote Section */}
              <div className="flex-1 text-center lg:text-left w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-primary text-xl sm:text-2xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6 sm:mb-8 text-gray-100 px-2 sm:px-0">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-xl font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-base">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div 
                className="flex-shrink-0 mb-6 sm:mb-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="relative mx-auto lg:mx-0">
                  <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name}&size=400&background=ff6b35&color=white&bold=true`;
                      }}
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 border-2 border-primary rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-8 sm:mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 border border-gray-600 rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="p-3 border border-gray-600 rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20 pt-10 sm:pt-20 border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">50+</div>
            <div className="text-gray-400 uppercase tracking-wider text-xs sm:text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">98%</div>
            <div className="text-gray-400 uppercase tracking-wider text-xs sm:text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">3x</div>
            <div className="text-gray-400 uppercase tracking-wider text-xs sm:text-sm">Average Growth</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
