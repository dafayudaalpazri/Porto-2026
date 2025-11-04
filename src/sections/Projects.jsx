import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import ShinyText from "../components/ShinyText/ShinyText";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">
        <ShinyText text="My Projects" speed={7} />
      </h2>
      <div className="section-divider mt-12" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-40 sm:h-56 rounded-lg shadow-lg pointer-events-none w-64 sm:w-80 hidden sm:block"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
      
      {/* Call to Action Section */}
      <div className="mt-16 sm:mt-20 md:mt-24">
        <div className="section-divider mb-12" />
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Have a Project in Mind?
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Whether you need a website, web application, or have a unique project idea, let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-lavender to-royal rounded-lg hover:from-royal hover:to-lavender transition-all hover-animation"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/dafayudaalpazri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-base font-medium text-neutral-300 border border-neutral-700 rounded-lg hover:border-neutral-500 hover:text-white transition-all hover-animation"
            >
              View GitHub
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-xs sm:text-sm text-neutral-500">
              💡 Currently working on new projects • Always learning and improving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
