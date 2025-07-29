import { useState } from "react";
import DropdownServices from "./DropdownServices";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="bg-black text-white py-6 px-6 md:px-10 flex items-center justify-between relative">
        <div className="text-2xl font-semibold">
          <span className="text-primary">*</span>fff
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-medium uppercase relative tracking-wider">
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button>SERVICES ▾</button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-4 z-50">
                <DropdownServices />
              </div>
            )}
          </div>
          <a href="#">CASES</a>
          <a href="#">COMPANY</a>
          <a href="#">CAREER</a>
          <a href="#">INSIGHTS</a>
          <a href="#">CONTACTS</a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black rounded-md px-5 py-2 text-sm font-semibold tracking-wide">
            GET IN TOUCH →
          </button>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)} className="text-3xl">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;
