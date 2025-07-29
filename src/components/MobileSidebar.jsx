import { useState, useEffect } from "react";
import DropdownServices from "./DropdownServices";

const MobileSidebar = ({ isOpen, onClose }) => {
  const [showServices, setShowServices] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 max-w-full h-full bg-white text-black z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-between`}
      >
        {/* Top Close & Navigation */}
        <div className="p-6 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div className="text-2xl font-bold">
              <span className="text-primary">*</span>phenomenon
            </div>
            <button onClick={onClose} className="text-2xl font-bold">×</button>
          </div>

          <nav className="flex flex-col gap-4 text-lg font-medium">
            <button
              className="text-left"
              onClick={() => setShowServices((prev) => !prev)}
            >
              Services {showServices ? "▲" : "▼"}
            </button>
            {showServices && (
              <div className="ml-4 mt-2 max-h-[300px] overflow-y-auto">
                <DropdownServices mobile={true} />
              </div>
            )}
            <a href="#" className="mt-2">Cases</a>
            <a href="#">Company</a>
            <a href="#">Career</a>
            <a href="#">Insights</a>
            <a href="#">Contacts</a>
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="p-6">
          <button className="w-full bg-black text-white rounded-md py-3 text-sm font-semibold">
            Get In Touch →
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
