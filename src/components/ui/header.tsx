import Link from 'next/link';
import React from 'react';
import NavBar from './NavBar';
import MobileNav from './MobileNav';
import ThemeToggle from '../layout/ThemeToggle';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 xl:py-8 border-b border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] transition-colors duration-300">
      <div className='container mx-auto flex justify-between items-center '>
      
        <Link href="#home">
          <h1 className='text-4xl  font-semibold'>
            Ramy <span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex items-center gap-8">
            <NavBar />
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
