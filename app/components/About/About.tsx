import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="text-white">
          <h2 className="text-4xl font-medium border-l-8 px-3 mb-8 border-primary">
            About
          </h2>
          <p className="text-2xl mb-5">
            I am a{" "}
            <span className="text-primary">Full Stack MERN Developer</span>
          </p>
          <p className="leading-8 text-gray-300">
            Full Stack MERN Developer with experience building scalable web
            applications using React, Next.js, Node.js, Express, and MongoDB. I
            enjoy transforming ideas into high-performance products with clean
            architecture, modern UI, and great user experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-primary text-2xl font-bold">10+</h3>
              <p className="text-sm text-gray-300">Projects</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-primary text-2xl font-bold">2+</h3>
              <p className="text-sm text-gray-300">Years Learning</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-primary text-lg font-bold">MERN</h3>
              <p className="text-sm text-gray-300">Stack</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-primary text-lg font-bold">Shopify</h3>
              <p className="text-sm text-gray-300">Developer</p>
            </div>
          </div>

          {/* CV Button */}
          <a
            href="./Sayed Mohamed Sayed.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-medium hover:scale-105 transition-all duration-300 mb-8"
          >
            Download CV
          </a>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary transition-all duration-300 flex flex-col items-center gap-3">
              <BsFillTelephoneFill className="text-xl text-primary" />
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-300">+20 110 212 8186</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary transition-all duration-300 flex flex-col items-center gap-3">
              <BiLogoGmail className="text-2xl text-primary" />
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-300 break-all">
                sayedmo.web.developer@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="./about.jpg"
            alt="About Me"
            loading="lazy"
            className="rounded-3xl border border-white/10 shadow-2xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
