import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between py-6 sm:py-10 space-y-4 sm:space-y-0 gap-4 sm:gap-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="w-full sm:w-auto">
          <p className="text-xl sm:text-2xl">{title}</p>
          <div className="flex flex-wrap gap-3 sm:gap-5 mt-2 text-sm sm:text-base text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 text-sm sm:text-base cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 sm:w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <AnimatePresence>
        {isHidden && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModal={() => setIsHidden(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
