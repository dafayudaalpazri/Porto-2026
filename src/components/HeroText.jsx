import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import ShinyText from "./ShinyText/ShinyText";

const HeroText = () => {
  const words = ["Student", "Developer", "Learner"];
  
  const smoothScrollTo = (elementId) => {
    if (elementId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        const offset = 80;
        const rectTop = element.getBoundingClientRect().top;
        const offsetPosition = rectTop + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };
  
  // Variants for name animation
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Variants for letter A animation
  const letterAVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  };

  // Variants for FlipWords animation
  const flipWordsVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <div className="z-10 mt-20 md:mt-40 c-space text-center md:text-left">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight"
        variants={nameVariants}
        initial="hidden"
        animate="visible"
      >
        Hi, I'm Dafa Yuda Al Pazri
      </motion.h1>
      <div className="mt-3 flex justify-center md:justify-start">
        <div className="h-[3px] w-24 sm:w-28 md:w-32 bg-gradient-to-r from-lavender via-royal to-lavender rounded-full" />
      </div>
      <motion.div
        className="mt-4 max-w-xl mx-auto md:mx-0 text-base sm:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ShinyText
          text="I build delightful web experiences with modern stacks and tasteful motion. Always learning, always shipping."
          speed={6}
          className="text-neutral-300"
        />
      </motion.div>
      <div className="mt-3 sm:mt-4 flex flex-wrap items-baseline justify-center md:justify-start gap-3 sm:gap-4">
        <motion.span
          className="leading-none bg-gradient-to-r from-lavender via-royal to-lavender bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl text-glow"
          variants={letterAVariants}
          initial="hidden"
          animate="visible"
        >
          A
        </motion.span>
        <motion.div
          variants={flipWordsVariants}
          initial="hidden"
          animate="visible"
          className="leading-none"
        >
          <FlipWords
            words={words}
            className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl"
          />
        </motion.div>
      </div>
      <motion.div
        className="mt-6 sm:mt-7 flex flex-nowrap items-center gap-2 sm:gap-4 justify-center md:justify-start overflow-x-auto scrollbar-hide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("work");
          }}
          className="shrink-0 whitespace-nowrap px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white bg-gradient-to-r from-lavender to-royal rounded-lg hover:from-royal hover:to-lavender transition-all hover-animation"
        >
          View Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("contact");
          }}
          className="shrink-0 whitespace-nowrap px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-neutral-300 border border-white/15 rounded-lg hover:border-white/30 hover:text-white transition-all hover-animation"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
