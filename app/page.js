"use client";

import React from "react";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

const projects = [
  {
    id: 1,
    title: "Project Placeholder 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    tech: ["Tech1", "Tech2", "Tech3"],
    image: "/projects/placeholder1.png",
    live: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "Project Placeholder 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    tech: ["Tech1", "Tech2"],
    image: "/projects/placeholder2.png",
    live: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "Project Placeholder 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    tech: ["Tech1", "Tech2", "Tech3"],
    image: "/projects/placeholder3.png",
    live: "#",
    repo: "#",
  },
];

const socialLinks = [
  { id: "github", label: "GitHub", href: "https://github.com/PrithviRe" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/prithvi-pramit/" },
];

export default function PortfolioPage() {
  return (
    <main className={`${inter.className} bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100`}>
      <div className="max-w-6xl mx-auto px-6">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

function Nav() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
          PP
        </div>
        <div>
          <div className="text-sm font-semibold">Prithvi Pramit</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Student</div>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm">
        {["Projects", "About", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-indigo-500 transition-colors">
            {link}
          </a>
        ))}
        <a href="#resume" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:shadow-lg hover:scale-[1.02] transition">
          Resume
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={`${grotesk.className} text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent`}>
          Exploring tech with curiosity and a dash of mischief.
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
          I’m Prithvi, a student fascinated by all things technology. From development and embedded systems to cybersecurity. When I’m not tinkering with code or circuits, I’m probably daydreaming about building robots that make coffee or inventing pointless-but-fun apps just for the thrill of it.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:shadow-indigo-500/50 hover:scale-105 transition">
            See projects
          </a>
          <a href="#contact" className="px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Get in touch
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <Image src="/avatar.jpg" alt="avatar" width={40} height={40} />
          </div>
          <div>
            <div className="font-medium">Available for collaborations</div>
            <div className="text-xs">Open to learning, building, and experimenting</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-100 to-pink-100 dark:from-indigo-900 dark:to-pink-900 flex items-center justify-center"
      >
        <span className="text-6xl font-extrabold opacity-20">PORTFOLIO</span>
      </motion.div>
    </section>
  );
}

function About() {
  const skills = ["Development", "Embedded Systems", "Cybersecurity", "Creative Tech"];
  return (
    <section id="about" className="mt-28">
      <h2 className={`${grotesk.className} text-3xl font-bold`}>About</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl">
        I’m an enthusiastic tech explorer who loves diving into new domains. From coding sleek interfaces to debugging embedded boards. I value curiosity, experimentation, and a healthy balance of practical skills and whimsical ideas.
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mt-28">
      <div className="flex items-center justify-between">
        <h2 className={`${grotesk.className} text-3xl font-bold`}>Selected Projects</h2>
        <a href="#" className="text-sm text-indigo-600 hover:underline">View all</a>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-indigo-500/20 transition-transform"
          >
            <div className="relative w-full h-48">
              <Image src={p.image} alt={p.title} fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                <a href={p.repo} className="text-indigo-600 hover:underline">Repo</a>
                <a href={p.live} className="text-indigo-600 hover:underline">Live</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-28">
      <h2 className={`${grotesk.className} text-3xl font-bold`}>Contact</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <input className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="Your Name" />
          <input className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="you@company.com" />
          <textarea rows={5} className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="Tell me about your project..."></textarea>
          <button type="button" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition">Send message</button>
        </form>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Email: <a href="mailto:pprithvi2006@gmail.com" className="text-indigo-600">pprithvi2006@gmail.com</a>
            </p>
            <p className="mt-1 text-sm">Based in: Chennai, Tamil Nadu</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.id} href={s.href} className="px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-28 py-8 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between">
        <div>© {new Date().getFullYear()} Prithvi Pramit — Built with Next.js & Tailwind</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
