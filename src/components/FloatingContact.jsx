import { FaPhoneAlt } from "react-icons/fa";

const FloatingCall = () => {
  return (
    <a
      href="tel:+919024099592"
      aria-label="Call RVK Software"
      className="
        fixed bottom-23 right-6 z-50
        flex items-center justify-center
        sm:w-15 sm:h-15
        w-12 h-12
        rounded-full
        bg-orange-500
        text-white
        shadow-lg
        hover:bg-orange-600
        transition
        animate-bounce
      "
    >
      <FaPhoneAlt className="text-2xl" />
    </a>
  );
};

export default FloatingCall;
