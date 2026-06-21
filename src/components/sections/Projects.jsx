"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

import shopImg from "./Shop.png";
import portfolioImg from "./portfolio.png";

const projects = [
    {
        title: "E-Commerce Website",
        description:
            "Online store with authentication, cart and products management.",
        image: shopImg,
        tech: ["Next.js", "TypeScript", "Tailwind", "Redux Toolkit", "typescript"],
        github: "https://github.com/RamyS7/NewStor.git",
        demo: "https://new-stor-efq8rrljz-ramys7s-projects.vercel.app/",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio website with animations and responsive design.",
        image: portfolioImg,
        tech: ["React", "Tailwind"],
        github: "https://github.com/RamyS7/reactPortfolio--.git",
        demo: "https://react-portfolio-wine-one-50.vercel.app/",
    },

];

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl w-full mx-auto px-6 py-10 md:py-14 scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>

            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm rounded-[6px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-accent card-transition flex flex-col justify-between cursor-pointer"
                        onClick={() => window.open(project.demo, "_blank")}
                    >
                        <div className="relative w-full h-52">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-2xl font-semibold">{project.title}</h3>

                            <p className="text-[var(--color-muted)] mt-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-xs rounded-[4px] bg-accent/15 text-accent font-medium"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-5 mt-6 relative z-10">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 hover:text-accent"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaGithub />
                                    Code
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 hover:text-accent"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaExternalLinkAlt />
                                    Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}