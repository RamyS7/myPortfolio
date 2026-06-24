"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGithub,
} from "react-icons/fa";

import {
    SiRedux,
    SiTailwindcss,
    SiNextdotjs,
    SiReactquery,
    SiAxios,
    SiVite,
} from "react-icons/si";


const skills = [
    {
        name: "React.js",
        category: "Library",
        icon: <FaReact />,
    },
    {
        name: "Next.js",
        category: "Framework",
        icon: <SiNextdotjs />,
    },
    {
        name: "Redux Toolkit",
        category: "State Management",
        icon: <SiRedux />,
    },
    {
        name: "React Query",
        category: "Data Fetching",
        icon: <SiReactquery />,
    },
    {
        name: "React Context API",
        category: "State Management",
        icon: <FaReact />,
    },
    {
        name: "JavaScript",
        category: "Interaction",
        icon: <FaJs />,
    },
    {
        name: "HTML5",
        category: "Markup",
        icon: <FaHtml5 />,
    },
    {
        name: "CSS3",
        category: "Styling",
        icon: <FaCss3Alt />,
    },
    {
        name: "Tailwind CSS",
        category: "Utility CSS",
        icon: <SiTailwindcss />,
    },
    {
        name: "Bootstrap",
        category: "CSS Framework",
        icon: <FaBootstrap />,
    },
    {
        name: "Axios",
        category: "API Requests",
        icon: <SiAxios />,
    },
    {
        name: "GitHub",
        category: "Version Control",
        icon: <FaGithub />,
    },
    {
        name: "Vite",
        category: "Build Tool",
        icon: <SiVite />,
    },
];


export default function Skills() {

    const [showMore, setShowMore] = useState(false);


    const visibleSkills = showMore
        ? skills
        : skills.slice(0, 6);



    return (

        <section id="skills" className="max-w-6xl w-full mx-auto px-6 py-10 md:py-14 scroll-mt-24 md:scroll-mt-32">

            <h2 className="text-4xl font-bold mb-10 text-center">
                What Skills I Have
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                <AnimatePresence>

                    {visibleSkills.map((skill) => (

                        <motion.div

                            key={skill.name}

                            initial={{
                                opacity: 0,
                                y: 30,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            exit={{
                                opacity: 0,
                                y: 20,
                            }}

                            transition={{
                                duration: 0.6,
                            }}

                            className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-accent card-transition group flex flex-col items-center text-center"
                        >

                            <div className="text-5xl text-accent mb-4 group-hover:scale-110 transition flex justify-center w-full">

                                {skill.icon}

                            </div>



                            <h3 className="text-xl font-semibold">

                                {skill.name}

                            </h3>



                            <p className="text-[var(--color-muted)] mt-2">

                                {skill.category}

                            </p>


                        </motion.div>


                    ))}


                </AnimatePresence>


            </div>


            <div className="flex justify-center mt-10">
                <button

                    onClick={() => setShowMore(!showMore)}

                    className="px-6 py-3 rounded-[6px] bg-accent text-black font-semibold hover:scale-105 transition"

                >

                    {showMore ? "Show Less" : "Show More"}

                </button>

            </div>

        </section>

    );
}