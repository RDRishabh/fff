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

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToTestimonial = (index) => setCurrentIndex(index);

  return (
    <section className="bg-black text-gray-50 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 uppercase tracking-wide mb-3 text-xs sm:text-sm font-semibold">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>
          <p className="text-gray-50 text-sm sm:text-base max-w-2xl mx-auto">
            Hear directly from leaders who’ve partnered with us to bring bold ideas to life.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Quote Section */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-orange-500 text-lg sm:text-xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg md:text-xl font-light leading-relaxed mb-4 text-gray-50">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-50">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-orange-200 mx-auto lg:mx-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name}&size=200&background=ff6b35&color=white&bold=true`;
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-6">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 border border-gray-300 rounded-full hover:border-orange-500 hover:bg-orange-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="p-2 border border-gray-300 rounded-full hover:border-orange-500 hover:bg-orange-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">50+</div>
            <div className="text-gray-50 uppercase tracking-wide text-xs">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">98%</div>
            <div className="text-gray-50 uppercase tracking-wide text-xs">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">3x</div>
            <div className="text-gray-50 uppercase tracking-wide text-xs">Average Growth</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
