import Image from "next/image";

const coreValues = [
  {
    title: "Integrity",
    desc: "We act with honesty, ethics, and responsibility in everything we do.",
    image: "/🤖 integrity.jpeg",
  },
  {
    title: "Accountability",
    desc: "We take ownership of outcomes and stand by our commitments.",
    image: "/accountability.jpeg",
  },
  {
    title: "Transparency",
    desc: "Clear communication and openness guide all our processes.",
    image: "/transparency.jpeg",
  },
  {
    title: "Teamwork",
    desc: "Collaboration fuels innovation and long-term success.",
    image: "/teamwork.jpeg",
  },
  {
    title: "Innovation",
    desc: "We embrace creativity and modern technology to solve problems.",
    image: "/innovation.jpeg",
  },
  {
    title: "Quality",
    desc: "Excellence is built into every solution we deliver.",
    image: "/quality.jpeg",
  },
  {
    title: "Customer Focus",
    desc: "Client success is always at the center of our work.",
    image: "/customer fo cused.jpeg",
  },
  {
    title: "Growth",
    desc: "Continuous learning drives personal and organizational growth.",
    image: "/growth.jpeg",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-black py-6 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Core Values
          </h2>
          <p className="mt-3 text-gray-400 text-[16px] max-w-3xl mx-auto">
            Integrity, transparency, teamwork, accountability, and innovation
            form the foundation of RVK Software.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((item, index) => (
           <div
  key={index}
  className="relative group rounded-2xl overflow-hidden
             bg-white/5 backdrop-blur-md
             border border-white/10
             transition-all duration-300
             hover:-translate-y-2
             hover:border-orange-500/50
             hover:shadow-[0_25px_60px_rgba(255,115,0,0.35)]"
>
  {/* GLOW LAYER */}
  <div
    className="absolute inset-0 rounded-2xl
               opacity-0 group-hover:opacity-100
               transition duration-500
               bg-gradient-to-br
               from-orange-500/20 via-orange-400/10 to-transparent
               blur-2xl"
  />

  {/* IMAGE */}
  <div className="relative h-44 overflow-hidden">
    <Image
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover
                 transition-transform duration-500
                 group-hover:scale-110"
      width={500}
      height={500}
    />
  </div>

  {/* CONTENT */}
  <div className="relative p-6">
    <h3 className="text-xl font-semibold text-white mb-2">
      {item.title}
    </h3>
    <p className="text-gray-400 text-[16px] leading-relaxed">
      {item.desc}
    </p>
  </div>
</div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
