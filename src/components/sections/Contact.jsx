

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          once: true,
        }}
        id="contact"
        className="max-w-2xl w-full mx-auto px-6 py-12 md:py-16 scroll-mt-24 md:scroll-mt-32 text-center flex flex-col items-center justify-center border border-[var(--color-border)] bg-[var(--color-surface)] rounded-[6px]"
      >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>

        <p className="text-sm md:text-base leading-7 text-[var(--color-muted)] max-w-lg mx-auto mb-6">
          I am currently looking for new opportunities. Whether you have a project idea, a question, or just want to connect, feel free to drop a message!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <a
            href="https://wa.me/201117147125?text=Hello"
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              rounded-[6px]
              bg-accent
              text-black
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              hover:shadow-accent/20
              text-sm
            "
          >
            Say Hello 👋
          </a>

          {/* Social links */}
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/ramysafwat/"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-[var(--color-border)] rounded-[6px] text-[var(--color-muted)] hover:text-[#0077B5] hover:border-[#0077B5] transition-all duration-300 flex items-center justify-center"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RamyS7"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-[var(--color-border)] rounded-[6px] text-[var(--color-muted)] hover:text-[#181717] dark:hover:text-[#ffffff] hover:border-[#181717] dark:hover:border-[#ffffff] transition-all duration-300 flex items-center justify-center"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/201117147125"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-[var(--color-border)] rounded-[6px] text-[var(--color-muted)] hover:text-[#25D366] hover:border-[#25D366] transition-all duration-300 flex items-center justify-center"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Motivational tagline */}
        <p className="text-xs md:text-sm font-medium text-[var(--color-accent)] italic">
          "Let's build something beautiful and scale it together! 🚀"
        </p>
      </motion.section>

      {/* Centered Footer */}
      <footer className="w-full max-w-6xl py-8 mt-16 border-t border-[var(--color-border)] text-center text-xs md:text-sm text-[var(--color-muted)]">
        <p>© 2026 Ramy Safwat . All rights reserved.</p>
      </footer>
    </div>
  );
}   