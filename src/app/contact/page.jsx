import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactUs from "../../components/ContactUs";

export default function Page (){
  return (
    <section className="bg-gray-50 pt-22 pb-6">
      <div className="max-w-7xl mx-auto px-2">
        {/* ================= CONNECT WITH US ================= */}
        <div className="bg-linear-to-br from-black/40 via-black/90 to-orange-400 rounded-3xl px-2 py-8 mb-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-orange-400 text-2xl font-semibold mb-2">
              CONNECT WITH US
            </p>
            <h2 className="text-xl md:text-4xl font-bold text-white leading-tight">
              Talk to the experts and see how can we help
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* PHONE CARD */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Planning a project or product?
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Discuss your business requirements, timelines, and technical
                    challenges with our experienced software consultants.
                  </p>

                  <div className="space-y-2 font-medium">
                    <p className="text-orange-500 font-medium">
                      Let’s build scalable solutions together
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EMAIL CARD */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Careers, support, or partnerships?
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Reach out for job opportunities, ongoing project support,
                    collaborations, or any general inquiries.
                  </p>

                  <p className="text-orange-500 font-medium">
                    We usually respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EXISTING CONTACT FORM ================= */}
        <ContactUs />
      </div>
    </section>
  );
};


