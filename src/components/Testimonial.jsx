"use client";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr Dinesh Chandak",
    role: "Fouder Of Khushi Child Care Clinic",
    feedback:
      "RVK Software delivered exactly what we needed — scalable architecture, clean UI, and a team that truly understands business goals.",
  },
  {
    name: "Mr Vinod Sharma",
    role: "Founder Hariom Electric Motors",
    feedback:
      "Their engineering quality and communication are outstanding. RVK feels less like a vendor and more like a long-term partner.",
  },
  {
    name: "Dr SK Meena",
    role: "Founder & Director Of SR Hospital",
    feedback:
      "From planning to execution, the RVK team showed deep technical expertise and a strong commitment to timelines.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black/5 py-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute  left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="mt-3 text-black-400 max-w-4xl mx-auto">
            Trusted by startups and enterprises for delivering reliable,
            scalable, and high-quality digital solutions.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative">
          <div
            className="relative mx-auto max-w-3xl
                       bg-white/5 backdrop-blur-lg
                       border border-white/10
                       rounded-3xl p-8 sm:p-6
                       shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                       transition-all duration-500"
          >
            {/* QUOTE ICON */}
            <FaQuoteLeft className="text-orange-500 text-3xl mb-6 opacity-80" />

            {/* FEEDBACK */}
            <p className="text-[16px] sm:text-[18px] text-black leading-relaxed mb-8">
              “{testimonials[active].feedback}”
            </p>

            {/* CLIENT INFO */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-black-semibold text-lg">
                  {testimonials[active].name}
                </h4>
                <p className="text-gray-700 text-sm">
                  {testimonials[active].role}
                </p>
              </div>

              {/* NAVIGATION */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="p-2 rounded-full
                             border border-white/20
                             text-orange-400
                             hover:bg-orange-100 hover:border-orange-500
                             transition"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full
                             border border-white/20
                             text-orange-400
                             hover:bg-orange-100 hover:border-orange-500
                             transition"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition
                  ${
                    index === active
                      ? "bg-orange-500 scale-110"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
