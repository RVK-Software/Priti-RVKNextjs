import {
  FaBuilding,
  FaBullhorn,
  FaBriefcase,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";


const features = [
  {
    icon: <FaBuilding />,
    title: "Local Business Directory",
    content:
      "Verified listings for businesses and service professionals—helping users find trusted services while giving businesses a powerful digital presence.",
  },
  {
    icon: <FaBullhorn />,
    title: "Brand & Influencer Collaboration",
    content:
      "We will make bridge between creators and brands. Influencers showcase expertise, while brands discover the right talent without middlemen.",
  },
  {
    icon: <FaBriefcase />,
    title: "Rojgar",
    content:
      "A transparent hiring ecosystem connecting job seekers with local employers, making recruitment simple, direct, and effective.",
  },
  {
    icon: <FaHome />,
    title: "Real Estate Platform",
    content:
      "Discover residential and commercial properties across India with direct access to builders and dealers—no hidden barriers.",
  },
];

const NavSankalpBlog = () => {
  return (
    <section className="bg-gray-50">
      {/* HERO */}
      <div className="relative bg-[url('/NavSankalp.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            NavSankalp App: Your All-in-One Platform
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Empowering businesses, creators, professionals, and communities by
            connecting opportunity with visibility across digital India.
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          In a rapidly evolving digital India, finding the right connection can
          be the difference between stagnating and soaring. Whether you’re a
          local shop owner, a creator seeking collaborations, or a professional
          searching for your next career move—visibility is everything.
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          NavSankalp is not just a directory. It is a purpose-built ecosystem
          designed to bridge talent, opportunity, and commerce.
        </p>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-orange-500 text-2xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY NAVSANKALP */}
      <div className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why Choose NavSankalp App?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Rooted in the spirit of{" "}
            <span className="text-orange-400 font-semibold">
              “Sankalp”
            </span>{" "}
            (Resolution), NavSankalp empowers Indian businesses and individuals
            with the digital tools they need to grow. Backed by the branding and
            marketing expertise of <strong>RVK GROUP</strong>, we help you not
            just get listed—but get noticed.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Your Journey Starts Here
        </h3>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Whether you’re looking to find a service, hire talent, collaborate
          with creators, buy property, or land your next job—NavSankalp is the
          destination.
        </p>

      
      </div>
    </section>
  );
};

export default NavSankalpBlog;
