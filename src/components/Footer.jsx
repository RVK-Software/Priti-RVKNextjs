
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-black/70 via-orange-300 to-white text-black">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* COMPANY INFO */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/RVK-LOGO1.png"
                alt="Company Logo"
                className="w-34 h-21"
                width={100}
                height={100}
              />
            </Link>

            <p className="text-[16px] text-black">
              The Heritage Smile of Rajasthan. Providing ethical,
              professional, and advanced IT solutions with compassion.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-[16px] text-black">
              <li>
                <Link href="/technologies" className="hover:text-orange-500 transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-orange-500 transition">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-orange-500 transition">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-orange-500 transition">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-orange-500 transition">
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-[16px] text-black">
              <li>
                <Link href="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-orange-500 transition">
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/navsankalp-blog"
                  className="hover:text-orange-500 transition"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-[16px] text-white">
          ©{new Date().getFullYear()} Developed & Maintained by{" "}
          <span className="font-semibold text-orange-600">
            RVK Software
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
