"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

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
const NavBar = () => {
    const pathName = usePathname();
    return (
        <div className='flex gap-5 items-center'>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={` ${link.path === pathName && 'text-accent border-b-2 border-accent'} text-[var(--color-primary-foreground)] capitalize font-medium hover:text-accent transition-all duration-200`}>
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavBar;