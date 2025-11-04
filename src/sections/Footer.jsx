import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 sm:gap-5 pb-3 text-xs sm:text-sm text-neutral-400 c-space">
      <div className="mb-4 section-divider" />
      <div className="flex flex-wrap justify-center gap-2 text-center">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3 items-center">
        {mySocials.map((social, index) => (
          <a 
            href={social.href} 
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity inline-flex items-center justify-center"
            title={social.name}
          >
            <img 
              src={social.icon} 
              className="w-5 h-5 sm:w-6 sm:h-6 brightness-0 invert" 
              alt={social.name}
            />
          </a>
        ))}
      </div>
      <p className="text-center">© 2025 Dafa Yuda Al Pazri. All rights reserved.</p>
    </section>
  );
};

export default Footer;
