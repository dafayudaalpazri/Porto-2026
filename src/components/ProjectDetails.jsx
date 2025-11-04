import { motion, AnimatePresence } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm p-2 sm:p-4 md:p-6 overflow-hidden"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-2xl mx-auto my-auto border shadow-lg rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden max-h-[95vh] flex flex-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute z-10 p-2 rounded-full top-2 right-2 sm:top-3 sm:right-3 bg-midnight/90 hover:bg-midnight backdrop-blur-sm transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <img src="assets/close.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="close" />
          </button>
          <div className="flex-shrink-0">
            <img src={image} alt={title} className="w-full h-auto object-cover rounded-t-2xl" />
          </div>
          <div className="overflow-y-auto flex-1 min-h-0 scrollbar-hide">
            <div className="p-4 sm:p-5 md:p-6">
              <h5 className="mb-3 text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</h5>
              <p className="mb-4 text-sm sm:text-base font-normal text-neutral-400 leading-relaxed">{description}</p>
              <div className="mb-4 space-y-3">
                {subDescription.map((subDesc, index) => (
                  <p key={index} className="text-sm sm:text-base font-normal text-neutral-400 leading-relaxed">
                    {subDesc}
                  </p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {tags.map((tag) => (
                    <img
                      key={tag.id}
                      src={tag.path}
                      alt={tag.name}
                      className="rounded-lg w-8 h-8 sm:w-10 sm:h-10 hover-animation"
                    />
                  ))}
                </div>
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-medium text-white bg-royal/50 hover:bg-royal rounded-lg transition-colors hover-animation"
                >
                  View Project
                  <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;
