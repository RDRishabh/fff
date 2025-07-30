import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownServices = ({ mobile = false }) => {
  const [activeCategory, setActiveCategory] = useState("DESIGN");
  const [hoveredItem, setHoveredItem] = useState(null);

  const services = {
    DESIGN: {
      items: [
        "Web app design",
        "Mobile app design", 
        "Website design",
        "Website redesign",
        "Branding"
      ],
      description: "Crafting beautiful, user-centered experiences",
      color: "from-purple-500 to-pink-500",
      icon: "🎨"
    },
    DEVELOPMENT: {
      items: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Mobile Development",
        "API Development"
      ],
      description: "Building robust, scalable digital solutions",
      color: "from-blue-500 to-cyan-500",
      icon: "⚡"
    },
    RESEARCH: {
      items: [
        "User Research",
        "Market Research",
        "Competitive Analysis",
        "User Testing",
        "Analytics"
      ],
      description: "Data-driven insights for informed decisions",
      color: "from-green-500 to-emerald-500",
      icon: "🔍"
    },
    VALIDATE: {
      items: [
        "MVP Development",
        "Prototype Testing",
        "User Validation",
        "Market Validation",
        "Concept Testing"
      ],
      description: "Validating ideas before full-scale development",
      color: "from-orange-500 to-red-500",
      icon: "✅"
    },
    BUILD: {
      items: [
        "Product Development",
        "Platform Building",
        "System Integration",
        "Database Design",
        "Cloud Infrastructure"
      ],
      description: "Transforming concepts into reality",
      color: "from-indigo-500 to-purple-500",
      icon: "🏗️"
    },
    SCALE: {
      items: [
        "Performance Optimization",
        "Infrastructure Scaling",
        "Team Expansion",
        "Process Improvement",
        "Growth Strategy"
      ],
      description: "Growing and optimizing for success",
      color: "from-teal-500 to-green-500",
      icon: "📈"
    }
  };

  if (mobile) {
    return (
      <motion.div 
        className="flex flex-col gap-4 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {Object.entries(services).map(([category, data], index) => (
          <motion.div 
            key={category} 
            className="border-b border-gray-200 pb-4 last:border-b-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <motion.h3 
              className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-lg">{data.icon}</span>
              {category}
            </motion.h3>
            <div className="flex flex-col gap-2">
              {data.items.map((item, idx) => (
                <motion.a 
                  key={idx} 
                  href="#" 
                  className="text-base text-gray-700 hover:text-primary cursor-pointer transition-colors pl-6"
                  whileHover={{ x: 10, color: "#8b5cf6" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white text-black shadow-2xl rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-100" 
      style={{ width: '900px' }}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex h-96">
        {/* Left Sidebar - Categories */}
        <motion.div 
          className="w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-6 border-r border-gray-200"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <motion.h2 
            className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Our Services
          </motion.h2>
          
          <div className="space-y-2">
            {Object.entries(services).map(([category, data], index) => (
              <motion.div
                key={category}
                className={`relative cursor-pointer p-3 rounded-xl transition-all duration-300 group ${
                  activeCategory === category 
                    ? 'bg-white shadow-lg' 
                    : 'hover:bg-white/60 hover:shadow-md'
                }`}
                onHoverStart={() => setActiveCategory(category)}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="text-xl"
                    animate={{ 
                      scale: activeCategory === category ? 1.2 : 1,
                      rotate: activeCategory === category ? 360 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {data.icon}
                  </motion.span>
                  <div>
                    <h3 className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                      activeCategory === category ? 'text-primary' : 'text-gray-600 group-hover:text-gray-800'
                    }`}>
                      {category}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.description}
                    </p>
                  </div>
                </div>
                
                {activeCategory === category && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-600 rounded-r-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          className="w-2/3 p-8 relative overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {/* Background Gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${services[activeCategory]?.color} opacity-5`}
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Header */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.span 
                    className="text-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {services[activeCategory]?.icon}
                  </motion.span>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {activeCategory}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm">
                  {services[activeCategory]?.description}
                </p>
              </motion.div>

              {/* Services Grid */}
              <motion.div 
                className="grid grid-cols-1 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {services[activeCategory]?.items.map((item, idx) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                    whileHover={{ x: 10, backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                    onHoverStart={() => setHoveredItem(`${activeCategory}-${idx}`)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-600"
                      animate={{ 
                        scale: hoveredItem === `${activeCategory}-${idx}` ? 1.5 : 1,
                        rotate: hoveredItem === `${activeCategory}-${idx}` ? 180 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <span className="text-gray-700 group-hover:text-primary transition-colors font-medium">
                      {item}
                    </span>
                    <motion.span
                      className="ml-auto text-gray-400 group-hover:text-primary transition-colors"
                      animate={{ x: hoveredItem === `${activeCategory}-${idx}` ? 5 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      →
                    </motion.span>
                    
                    {/* Hover Effect Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${services[activeCategory]?.color} opacity-0 rounded-lg`}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <motion.button
                  className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore {activeCategory.toLowerCase()} services
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DropdownServices;
