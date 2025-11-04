import { useState } from "react";
import { motion } from "motion/react";

const smoothScrollTo = (elementId) => {
  if (elementId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};

function Navigation({ onNavigate }) {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
    if (onNavigate) onNavigate();
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#home" 
          onClick={(e) => handleClick(e, "home")}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#about" 
          onClick={(e) => handleClick(e, "about")}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#work" 
          onClick={(e) => handleClick(e, "work")}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#contact" 
          onClick={(e) => handleClick(e, "contact")}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 border-b border-white/5">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("home");
            }}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer"
          >
            <span className="text-glow hidden sm:inline">D</span>afa
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onNavigate={handleNavigate} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-primary/95 backdrop-blur-lg border-t border-white/5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation onNavigate={handleNavigate} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
