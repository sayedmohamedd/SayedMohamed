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
        <div className=" grid grid-cols-9 h-[100vh]">
          <nav className="md:col-span-2 hidden md:flex flex-col justify-between items-center py-10 h-full text-white">
            {/* logo */}
            <Logo />
            <List />
            {/* follow */}
            <div>
              <h3 className="text-center mb-3 font-medium text-lg">
                Follow Me
              </h3>
              <div className="flex justify-between gap-1 items-center text-xl text-primary">
                <a href={media.linkedin}>
                  <AiFillLinkedin className="bg-white rounded-xl" />
                </a>
                <a href={media.github}>
                  <FiGithub className="bg-white rounded-xl" />
                </a>
                <a href={media.hackerrank}>
                  <FaHackerrank className="bg-white rounded-xl" />
                </a>
                <a href={media.whatsapp}>
                  <AiOutlineWhatsApp className="bg-white rounded-xl" />
                </a>
                <a href={media.facebook}>
                  <FaFacebookF className="bg-white rounded-xl" />
                </a>
                <a href={media.instagram}>
                  <AiOutlineInstagram className="bg-white rounded-xl" />
                </a>
              </div>
            </div>
          </nav>

          {/* header */}
          <section className="col-span-9 md:col-span-7 h-full flex justify-center items-center rounded-tl-3xl rounded-bl-3xl relative bg-gray-400">
            <img
              src="./cover.jpg"
              className="absolute top-0 w-full h-full z-0 rounded-tl-3xl rounded-bl-3xl"
              alt=""
              loading="lazy"
            />
            <div className="relative z-10 text-center text-white">
              <p className="text-2xl font-light">Hello</p>
              <h1 className="text-5xl mb-3">I'm Sayed Mohamed</h1>
              {/* <p className="text-2xl mb-2">
                A <span className="text-primary">Front End Developer</span>
              </p> */}
              <TypeWriterComponent />
              <button className="btn">
                <a href="#contact">Contact Me</a>
              </button>
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
