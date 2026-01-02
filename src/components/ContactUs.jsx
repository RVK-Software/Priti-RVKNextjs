"use client"; 

// ContactSection.jsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
//.env

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

 const onSubmit = async (data) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/contact`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    toast.success("Message sent successfully! We'll contact you shortly.");
    reset();
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Please try again.");
  }
};


  return (
    <div className="bg-white shadow-xl rounded-2xl grid lg:grid-cols-2 overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="bg-[#0f172a] text-white p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We help businesses build scalable, secure, and high-performance
            software solutions. Reach out to us and let’s discuss your idea.
          </p>

          <div className="space-y-5">
            {/* EMAIL */}
            <a
              href="mailto:info@rvksoftware.com"
              className="flex items-center gap-4 hover:text-orange-400 transition"
            >
              <FaEnvelope className="text-lg text-orange-400" />
              <span>info@rvksoftware.com</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+91902409959"
              className="flex items-center gap-4 hover:text-orange-400 transition"
            >
              <FaPhoneAlt className="text-lg text-orange-400" />
              <span>+91 9024099592</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/919024099592?text=${encodeURIComponent(
                "Hello RVK Software Team, I’m interested in your services and would like to discuss my project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-orange-400 transition"
            >
              <FaWhatsapp className="text-lg text-orange-400" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* LOCATION */}
           <div className="flex items-start gap-4">
  <FaMapMarkerAlt className="text-xl text-orange-400 shrink-0 mt-1" />
  <span className="text-base leading-relaxed">
    D-73 kusum Vihar lane no.10, Ram Nagariya Rd, Jagatpura, Jaipur,
    Rajasthan 302017
  </span>
</div>

          </div>
        </div>

        <p className="text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} RVK Software. All rights reserved.
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="p-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Send Us a Message
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Full name is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
