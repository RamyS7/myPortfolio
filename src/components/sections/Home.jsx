"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 pt-28 md:pt-36"
        >

            <motion.div

                initial={{
                    opacity: 0,
                    y: 60,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                viewport={{ once: true }}

                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}

                className="max-w-4xl text-center"

            >

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{ once: true }}

                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}

                    className="
            text-4xl
            md:text-6xl
            font-bold
            tracking-tight
            text-[var(--color-primary-foreground)]
            mb-4
          "
                >

                    Hello! I'm

                    <span className="text-accent">
                        {" "}Ramy Safwat
                    </span>

                </motion.h1>


                <motion.h2

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{ once: true }}

                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                    }}

                    className="
            text-xl
            md:text-3xl
            font-semibold
            text-[var(--color-muted)]
            mb-6
          "

                >

                    Front End Developer

                    <span className="text-accent">
                        {" | "}
                    </span>

                    React.js

                    <span className="text-accent">
                        {" | "}
                    </span>

                    Next.js

                    <span className="text-accent">
                        {" | "}
                    </span>

                    TypeScript

                </motion.h2>



                <motion.p

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{ once: true }}

                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                    }}

                    className="
            text-base
            md:text-lg
            leading-8
            text-[var(--color-primary-foreground)]/85
            max-w-3xl
            mx-auto
          "

                >

                    Junior Front-End Developer specializing in React.js, Next.js, and TypeScript.
                    Passionate about building responsive, user-friendly web applications and
                    continuously improving software development skills through real-world
                    projects and collaborative environments.

                    Highly motivated to learn backend development, databases, and software
                    engineering principles with the goal of becoming a full-stack developer.

                </motion.p>




                <motion.div

                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}

                    viewport={{ once: true }}

                    transition={{
                        duration: 0.5,
                        delay: 0.8,
                    }}

                    className="
            mt-8
            flex
            justify-center
            gap-4
          "

                >


                    <Link href="#projects">

                        <Button

                            variant="default"

                            size="lg"

                            className="
                px-8
                py-3
                transition-all
                duration-300
                hover:scale-105
              "

                        >
                            Projects
                        </Button>

                    </Link>



                    <Link href="#contact">

                        <Button

                            variant="default"

                            size="lg"

                            className="
                px-8
                py-3
                transition-all
                duration-300
                hover:scale-105
              "

                        >
                            Contact
                        </Button>

                    </Link>


                </motion.div>


            </motion.div>


        </section>
    );
}