import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import DropdownServices from "./DropdownServices";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: "CASES", href: "#" },
    { name: "COMPANY", href: "#" },
    { name: "CONTACTS", href: "#" }
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-lg ${
          isScrolled 
            ? 'bg-white/95 text-black shadow-lg border-b border-gray-200' 
            : 'bg-black/20 text-white border-b border-white/10'
        }`}
      >
        <div className=" px-6 md:px-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div 
              className="text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary">*</span>fff
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <motion.div
                className="relative"
                onHoverStart={() => setShowDropdown(true)}
                onHoverEnd={() => setShowDropdown(false)}
              >
                <motion.button
                  className="px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition-colors relative overflow-hidden"
                  whileHover={{ backgroundColor: isScrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">SERVICES</span>
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ rotate: showDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▾
                  </motion.span>
                </motion.button>
                
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 z-50"
                    >
                      <DropdownServices />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Regular Nav Items */}
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition-colors relative overflow-hidden group"
                  whileHover={{ backgroundColor: isScrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div className="hidden lg:block">
              <motion.button
                className={`px-6 py-3 text-sm font-semibold tracking-wide rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  isScrolled 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  GET IN TOUCH →
                </span>
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div className="lg:hidden">
              <motion.button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-lg"
                whileHover={{ backgroundColor: isScrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center"
                  initial={false}
                  animate={mobileOpen ? "open" : "closed"}
                >
                  <motion.span
                    className={`block h-0.5 w-6 rounded-sm ${isScrolled ? 'bg-black' : 'bg-white'}`}
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 2 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block h-0.5 w-6 rounded-sm mt-1 ${isScrolled ? 'bg-black' : 'bg-white'}`}
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block h-0.5 w-6 rounded-sm mt-1 ${isScrolled ? 'bg-black' : 'bg-white'}`}
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -2 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
          style={{ scaleX: scrollY }}
          initial={{ scaleX: 0 }}
        />
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileSidebar 
            isOpen={mobileOpen} 
            onClose={() => setMobileOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
