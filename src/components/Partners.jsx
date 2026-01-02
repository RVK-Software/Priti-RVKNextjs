import Image from "next/image";

const partners = [
  "/Partner1.jpeg",
  "/Partner2.jpeg",
  "/Partner3.jpeg",
  "/Partner4.jpeg",
  "/Partner5.jpeg",
  "/Partner6.jpeg",
];

const PartnersMarquee = () => {
  return (
    <section className="bg-black py-8 overflow-hidden relative">
      {/* ORANGE GLOW */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-2">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-orange-500">Trusted Partners</span>
          </h2>
          <p className="mt-4 text-white text-xl max-w-5xl mx-auto">
            We collaborate with forward-thinking organizations to deliver
            scalable, high-impact digital solutions.
          </p>
        </div>

        {/* MARQUEE */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-x-10 animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center
                           bg-white/5 border border-white/10
                           rounded-2xl p-4
                           transition hover:border-orange-500/40"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-20 sm:h-24 object-contain
                             grayscale opacity-70 rounded-xl
                             transition hover:grayscale-0 hover:opacity-100"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
