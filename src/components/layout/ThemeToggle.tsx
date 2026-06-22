"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const themes = ["light", "dark", "system"];

    const changeTheme = () => {
        const currentIndex = themes.indexOf(theme || "system");
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setTheme(nextTheme);
    };

    return (
        <button
            onClick={changeTheme}
            title={
                mounted
                    ? `Current theme: ${theme}`
                    : "Change theme"
            }
            className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-[6px]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        text-[var(--color-primary-foreground)]
        shadow-sm
        transition-all
        duration-300
        hover:scale-105
        hover:border-accent
        hover:shadow-accent/20
        hover:shadow-md
      "
        >
            {!mounted && (
                <Monitor size={18} />
            )}


            {mounted && theme === "light" && (
                <Sun
                    size={18}
                    className="text-yellow-500 fill-yellow-400 transition-transform duration-300"
                />
            )}


            {mounted && theme === "dark" && (
                <Moon
                    size={18}
                    className="text-accent fill-accent/80 transition-transform duration-300"
                />
            )}


            {mounted && theme === "system" && (
                <Monitor
                    size={18}
                    className="text-[var(--color-muted)] transition-transform duration-300"
                />
            )}
        </button>
    );
}
