// icons
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaHackerrank, FaFacebookF } from "react-icons/fa";

// components
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactForm/Contact";

import Navbar from "./components/Navbar";
import Logo from "@/app/components/logo/Logo";
import List from "@/app/components/List/List";
import TypeWriterComponent from "./components/TypeWriterComponent";

// Data
import { media } from "./utlis/data";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* header */}

      <header className="bg-dark" id="home">
        <div className="grid grid-cols-12 min-h-screen">
          <nav className="md:col-span-2 hidden md:flex flex-col justify-between items-center py-10 h-full text-white">
            <Logo />

            <List />

            {/* Icons */}
            <div>
              <div className="grid grid-cols-3 justify-center gap-4 text-white">
                <a href={media.linkedin} target="_blank">
                  <AiFillLinkedin className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300" />
                </a>

                <a href={media.github} target="_blank">
                  <FiGithub className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300" />
                </a>

                <a href={media.hackerrank} target="_blank">
                  <FaHackerrank className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300" />
                </a>

                <a href={media.whatsapp} target="_blank">
                  <AiOutlineWhatsApp className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300" />
                </a>

                <a href={media.facebook} target="_blank">
                  <FaFacebookF className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300" />
                </a>

                <a href={media.instagram} target="_blank">
                  <AiOutlineInstagram className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300" />
                </a>
              </div>
            </div>
          </nav>

          <section className="col-span-12 md:col-span-10 min-h-screen flex justify-center items-center rounded-tl-3xl rounded-bl-3xl relative overflow-hidden">
            <img
              src="./cover.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Cover"
            />

            <div className="absolute inset-0 bg-black/65 z-[1]" />

            <div className="relative z-10 text-center text-white px-5">
              <p className="text-xl md:text-2xl font-light mb-2">Hi, I'm</p>

              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Sayed Mohamed
              </h1>

              <TypeWriterComponent />

              <p className="max-w-2xl mx-auto text-gray-300 leading-8 mt-5">
                Building scalable web applications using MERN Stack, Next.js and
                Shopify with a focus on performance, clean architecture and user
                experience.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="#contact" className="btn">
                  Contact Me
                </a>

                <a
                  href={media.github}
                  target="_blank"
                  className="px-6 py-3 rounded-xl border border-white/20 hover:border-primary hover:text-primary transition-all"
                >
                  GitHub
                </a>

                <a
                  href="./Sayed Mohamed Sayed.pdf"
                  download
                  className="px-6 py-3 rounded-xl border border-white/20 hover:border-primary hover:text-primary transition-all"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>
        </div>
      </header>

      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
