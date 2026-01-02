
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "919024099592";
  const message =
    "Hello RVK Software Team, I’m interested in your services and would like to discuss my project.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RVK Software on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        sm:w-18 sm:h-18
        w-14 h-14
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        hover:bg-green-600
        transition
        animate-bounce
      "
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
};

export default FloatingWhatsApp;
