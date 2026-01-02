import { FaUsers, FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";
import { FaBullhorn, FaCode } from "react-icons/fa6";

const whyJoinRVK = [
  {
    icon: <FaRocket />,
    title: "Growth-Oriented Culture",
    desc: "We believe in continuous learning, skill enhancement, and long-term career growth for every team member.",
  },
  {
    icon: <FaLightbulb />,
    title: "Meaningful Work",
    desc: "Work on real-world projects that create impact for businesses and communities across industries.",
  },
  {
    icon: <FaUsers />,
    title: "Supportive Team Environment",
    desc: "Collaborate with passionate professionals in an environment built on trust, respect, and teamwork.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparency & Ownership",
    desc: "Clear communication, accountability, and ownership are core to how we work at RVK.",
  },
];

const openPositions = [
  {
    icon: <FaBullhorn />,
    role: "Digital Marketer",
    location: "On-site",
    experience: "0–2 Years",
    desc: "Plan and execute digital marketing strategies across social media, SEO, paid campaigns, and content marketing.",
  },
  {
    icon: <FaCode />,
    role: "MERN Stack Developer",
    location: "On-site",
    experience: "0–3 Years",
    desc: "Build scalable web applications using MongoDB, Express, React, and Node.js with clean architecture.",
  },
];

export default function Page () {
  return (
    <section className="bg-gray-50 overflow-hidden">

      {/* ================= WHY JOIN RVK ================= */}
      <div className="relative pt-20 pb-10 bg-black text-white overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Why Join RVK
            </h1>
            <p className="mt-4 text-gray-300 max-w-5xl mx-auto text-lg">
              At RVK, we don’t just build software — we build careers,
              confidence, and long-term professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinRVK.map((item, index) => (
              <div
                key={index}
                className="
                  group relative bg-white/5 backdrop-blur
                  rounded-2xl p-8 border border-white/10
                  transition-all duration-500
                  
                  hover:border-orange-500/40
                "
              >
                {/* Glow on hover */}
                <div
                  className="
                    absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100 transition duration-500
                    bg-gradient-to-r from-orange-400/20 via-transparent to-blue-400/20
                    blur-xl
                  "
                ></div>

                <div className="relative z-10">
                  <div className="text-orange-500 text-3xl mb-4  transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= OPEN POSITIONS ================= */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Open Positions
            </h2>
            <p className="mt-4 text-gray-600 max-w-5xl mx-auto text-lg">
              We’re looking for passionate individuals who want to grow,
              learn, and build impactful digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {openPositions.map((job, index) => (
              <div
                key={index}
                className="
                  group relative bg-white rounded-2xl p-10
                  shadow-md transition-all duration-500
                  hover:-translate-y-3
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100 transition duration-500
                    bg-gradient-to-r from-orange-300/30 via-transparent to-gray-300
                    blur-xl
                  "
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-orange-500 text-3xl">
                      {job.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {job.role}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                       {job.location}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                      💼 {job.experience}
                    </span>
                  </div>

                  <button
                    className="
                      inline-flex items-center gap-2
                      bg-orange-500 text-white
                      px-6 py-3 rounded-xl
                      font-semibold
                      hover:bg-orange-600
                      transition
                    "
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};


