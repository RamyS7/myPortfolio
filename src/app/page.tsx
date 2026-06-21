"use client";

import Home from "@/components/sections/Home"
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";



export default function page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
