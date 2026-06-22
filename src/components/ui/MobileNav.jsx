"use client"
import React, { useState, useEffect } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: "Home",
        path: "#home",
    },
    {
        name: "Skills",
        path: "#skills",
    },
    {
        name: "Projects",
        path: "#projects",
    },
    {
        name: "Contact",
        path: "#contact",
    },
];
const MobileNav = () => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-3xl text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col items-center justify-center gap-15'>
                <div className='mt-32 text-2xl  text-center'>
                    <Link href="/"> <h1 className='text-4xl  font-semibold'>
                        Ramy <span className='text-accent'>.</span>
                    </h1></Link>
                </div>
                <nav className='flex flex-col  text-center space-y-8 justify-center'>
                    {links.map((link, index) => {
                        const isActive = mounted && link.path === pathname;
                        return (
                            <Link href={link.path} key={index} className={`${isActive ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize text-[var(--color-primary-foreground)]
                            hover:text-accent transition-all duration-200 `}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav