import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import ShinyText from "../components/ShinyText/ShinyText";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showAlertMessage("danger", "Please fill in all fields!");
      return;
    }

    setIsLoading(true);

    try {
      // Try EmailJS first
      const result = await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Dafa Yuda Al Pazri",
          from_email: formData.email,
          to_email: "dafayudaalpazri@gmail.com",
          message: formData.message,
          reply_to: formData.email,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      
      console.log("EmailJS result:", result);
      
      if (result && (result.text === "OK" || result.status === 200 || result.status === 0)) {
        setIsLoading(false);
        setFormData({ name: "", email: "", message: "" });
        showAlertMessage("success", "Your message has been sent successfully! I'll get back to you soon.");
        return;
      }
    } catch (error) {
      console.error("EmailJS error:", error);
    }

    // Fallback: Use mailto link (always works)
    setIsLoading(false);
    const subject = encodeURIComponent(`Contact from Portfolio - ${formData.name}`);
    const body = encodeURIComponent(`Hello Dafa,\n\nMy name is ${formData.name}.\nMy email: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio website`);
    const mailtoLink = `mailto:dafayudaalpazri@gmail.com?subject=${subject}&body=${body}`;
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    showAlertMessage("success", "Opening your email client... Please send the message from there.");
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-full max-w-md p-4 sm:p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-4 sm:gap-5 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <ShinyText text="Let's Talk" speed={7} />
          </h2>
          <p className="text-sm sm:text-base font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer transition-all ${
              isLoading 
                ? "bg-neutral-600 cursor-not-allowed opacity-50" 
                : "bg-gradient-to-r from-lavender to-royal hover:from-royal hover:to-lavender hover-animation"
            }`}
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
