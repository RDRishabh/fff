import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    description: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: "web-design", label: "Web App Design" },
    { value: "mobile-design", label: "Mobile App Design" },
    { value: "website-design", label: "Website Design" },
    { value: "branding", label: "Branding" },
    { value: "frontend-dev", label: "Frontend Development" },
    { value: "backend-dev", label: "Backend Development" },
    { value: "fullstack-dev", label: "Full Stack Development" },
    { value: "mobile-dev", label: "Mobile Development" },
    { value: "user-research", label: "User Research" },
    { value: "market-research", label: "Market Research" },
    { value: "mvp-dev", label: "MVP Development" },
    { value: "prototype", label: "Prototype Testing" },
    { value: "product-dev", label: "Product Development" },
    { value: "scaling", label: "Performance Optimization" }
  ];

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          newErrors.fullName = "Full name is required";
        } else if (value.trim().length < 2) {
          newErrors.fullName = "Name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.fullName = "Name can only contain letters and spaces";
        } else {
          delete newErrors.fullName;
        }
        break;

      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;

      case "service":
        if (!value) {
          newErrors.service = "Please select a service";
        } else {
          delete newErrors.service;
        }
        break;

      case "description":
        if (!value.trim()) {
          newErrors.description = "Project description is required";
        } else if (value.trim().length < 10) {
          newErrors.description = "Description must be at least 10 characters";
        } else if (value.trim().length > 500) {
          newErrors.description = "Description must be less than 500 characters";
        } else {
          delete newErrors.description;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
    });

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          service: "",
          description: ""
        });
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 3000);
      
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-10 sm:py-20 overflow-hidden">
      <div className="px-4 sm:px-8">
        <div className="mb-8 sm:mb-16">
          <span className="tracking-widest text-gray-500 font-bold text-[14px] sm:text-[18px]">GET IN TOUCH</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-16 lg:gap-24">
          {/* Left Side - Contact Details */}
          <motion.div 
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-black text-[32px] xs:text-[44px] sm:text-[60px] lg:text-[70px] leading-tight mb-6 sm:mb-12" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
              Let's discuss your
              <br />
              <span className="text-orange-500">next project</span>
            </h2>
            
            <div className="space-y-6 sm:space-y-12">
              <motion.div 
                className="border-l-2 border-gray-200 pl-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-2 sm:mb-4">
                  EMAIL
                </h3>
                <p className="text-[18px] xs:text-[22px] sm:text-[25px] text-black font-light" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                  info@frenchfryfeatures.com
                </p>
              </motion.div>

              <motion.div 
                className="border-l-2 border-gray-200 pl-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-2 sm:mb-4">
                  PHONE
                </h3>
                <p className="text-[18px] xs:text-[22px] sm:text-[25px] text-black font-light" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                  +91-8799111110
                </p>
              </motion.div>

              <motion.div 
                className="border-l-2 border-gray-200 pl-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-2 sm:mb-4">
                  OFFICE
                </h3>
                <p className="text-[18px] xs:text-[22px] sm:text-[25px] text-black font-light leading-tight" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                  Master's Union, CyberPark
                  <br />
                  Gurgaon
                </p>
              </motion.div>

              <motion.div 
                className="border-l-2 border-gray-200 pl-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-2 sm:mb-4">
                  RESPONSE TIME
                </h3>
                <p className="text-[18px] xs:text-[22px] sm:text-[25px] text-black font-light" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                  Within 24 hours
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="border-l-2 border-green-500 pl-8 py-16"
                >
                  <h3 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-2 sm:mb-4">
                    SUCCESS
                  </h3>
                  <h2 className="font-bold text-black text-[24px] xs:text-[32px] sm:text-[40px] leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                    Thank you for reaching out
                  </h2>
                  <p className="text-[14px] xs:text-[16px] sm:text-[18px] text-gray-600 font-light" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                    We've received your message and will get back to you within 24 hours with a detailed proposal.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider block mb-2 sm:mb-4">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-200 focus:border-black bg-transparent py-3 sm:py-4 text-[16px] xs:text-[18px] sm:text-[20px] text-black outline-none transition-colors duration-300"
                      style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                      placeholder="Enter your full name"
                    />
                    <AnimatePresence>
                      {errors.fullName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-[12px] xs:text-[14px] mt-2"
                        >
                          {errors.fullName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider block mb-2 sm:mb-4">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-200 focus:border-black bg-transparent py-3 sm:py-4 text-[16px] xs:text-[18px] sm:text-[20px] text-black outline-none transition-colors duration-300"
                      style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                      placeholder="your.email@example.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-[12px] xs:text-[14px] mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider block mb-2 sm:mb-4">
                      SERVICE REQUIRED *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-200 focus:border-black bg-transparent py-3 sm:py-4 text-[16px] xs:text-[18px] sm:text-[20px] text-black outline-none transition-colors duration-300 appearance-none cursor-pointer"
                      style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    <AnimatePresence>
                      {errors.service && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-[12px] xs:text-[14px] mt-2"
                        >
                          {errors.service}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider block mb-2 sm:mb-4">
                      PROJECT DESCRIPTION *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border-b-2 border-gray-200 focus:border-black bg-transparent py-3 sm:py-4 text-[16px] xs:text-[18px] sm:text-[20px] text-black outline-none transition-colors duration-300 resize-none"
                      style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                      placeholder="Tell us about your project, goals, timeline, and requirements"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <AnimatePresence>
                        {errors.description ? (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-[12px] xs:text-[14px]"
                          >
                            {errors.description}
                          </motion.p>
                        ) : (
                          <div></div>
                        )}
                      </AnimatePresence>
                      <span className="text-[10px] xs:text-[12px] text-gray-400">
                        {formData.description.length}/500
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pt-4 sm:pt-8"
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || Object.keys(errors).length > 0}
                      className={`w-full border-2 py-4 sm:py-6 text-[14px] xs:text-[16px] sm:text-[18px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isSubmitting || Object.keys(errors).length > 0
                          ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                          : 'border-black text-black hover:bg-black hover:text-white'
                      }`}
                      style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}
                      whileHover={!isSubmitting && Object.keys(errors).length === 0 ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting && Object.keys(errors).length === 0 ? { scale: 0.98 } : {}}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-3"
                          >
                            <motion.div
                              className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            SENDING MESSAGE
                          </motion.div>
                        ) : (
                          <motion.span
                            key="submit"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            SEND MESSAGE
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
