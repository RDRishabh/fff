import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "SERVICES": [
      { name: "Web App Design", href: "#" },
      { name: "Mobile App Design", href: "#" },
      { name: "Website Design", href: "#" },
      { name: "Branding", href: "#" },
      { name: "Frontend Development", href: "#" },
      { name: "Backend Development", href: "#" },
      { name: "Full Stack Development", href: "#" },
      { name: "Mobile Development", href: "#" }
    ],
    "COMPANY": [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" }
    ],
    "RESOURCES": [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Twitter", href: "#", icon: "tw" },
    { name: "GitHub", href: "#", icon: "gh" },
    { name: "Dribbble", href: "#", icon: "dr" }
  ];

  return (
    <footer className="bg-black text-white py-10 sm:py-20 overflow-hidden">
      <div className="px-4 sm:px-8">
        {/* Main Footer Content */}
        <div className="border-b border-gray-800 pb-8 sm:pb-16 mb-8 sm:mb-16">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-[28px] xs:text-[32px] sm:text-[40px] font-bold mb-2 sm:mb-4" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                  <span className="text-orange-500">*</span>fff
                </h2>
                <p className="text-[14px] xs:text-[16px] sm:text-[18px] text-gray-400 font-light leading-relaxed" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                  Digital product design agency helping startups and enterprises build exceptional user experiences.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-[11px] xs:text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                    EMAIL
                  </h3>
                  <a 
                    href="mailto:hello@fff.agency" 
                    className="text-[16px] xs:text-[18px] sm:text-[20px] text-white hover:text-orange-500 transition-colors duration-300" 
                    style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                  >
                    info@frenchfryfeatures.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-[11px] xs:text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                    PHONE
                  </h3>
                  <a 
                    href="tel:+15551234567" 
                    className="text-[16px] xs:text-[18px] sm:text-[20px] text-white hover:text-orange-500 transition-colors duration-300" 
                    style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                  >
                    +91-8799111110
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
              >
                <h3 className="text-[11px] xs:text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:mb-8">
                  {category}
                </h3>
                <nav className="space-y-2 sm:space-y-4">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-[14px] xs:text-[16px] text-gray-300 hover:text-white transition-colors duration-300"
                      style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col xs:flex-row lg:flex-row justify-between items-start xs:items-center lg:items-center gap-6 xs:gap-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-4 lg:gap-8"
          >
            <p className="text-[12px] xs:text-[14px] text-gray-500" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
              © {currentYear} fff Agency. All rights reserved.
            </p>
            <div className="flex gap-4 xs:gap-6">
              <a 
                href="#" 
                className="text-[12px] xs:text-[14px] text-gray-500 hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-[14px] text-gray-500 hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
              >
                Terms of Service
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-2 xs:gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 border border-gray-700 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 group"
                aria-label={social.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span 
                  className="text-[10px] xs:text-[12px] font-bold text-gray-400 group-hover:text-white transition-colors duration-300 uppercase"
                  style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                >
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          className="text-center mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 xs:gap-2 text-[12px] xs:text-[14px] text-gray-500 hover:text-white transition-colors duration-300 group"
            style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
            whileHover={{ y: -2 }}
          >
            <motion.span
              className="text-[10px] xs:text-[12px] group-hover:text-orange-500 transition-colors duration-300"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↑
            </motion.span>
            BACK TO TOP
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
