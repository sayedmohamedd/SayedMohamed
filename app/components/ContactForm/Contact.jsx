import Form from "./Form";
// Icons
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
// Data
import { media } from "@/app/utlis/data";

const Contact = () => {
  return (
    <section id="contact" className="bg-dark">
      <div className="container mx-auto px-5 py-20">
        <h2 className="text-4xl font-medium border-l-8 px-3 mb-12 border-primary text-white">
          Let’s work together 🤝
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary transition">
              <BiLogoGmail className="text-3xl text-primary mb-3" />
              <h3 className="text-white font-semibold">Email</h3>
              <p className="text-gray-300 mt-1">
                sayedmo.web.developer@gmail.com
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary transition">
              <BsFillTelephoneFill className="text-2xl text-primary mb-3" />
              <h3 className="text-white font-semibold">Phone</h3>
              <p className="text-gray-300 mt-1">+20 110 212 8186</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary transition">
              <TiContacts className="text-3xl text-primary mb-3" />
              <h3 className="text-white font-semibold">Social Links</h3>

              <div className="flex gap-4 mt-3 text-xl text-primary">
                <a href={media.linkedin} target="_blank">
                  LinkedIn
                </a>
                <a href={media.github} target="_blank">
                  GitHub
                </a>
                <a href={media.whatsapp} target="_blank">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
