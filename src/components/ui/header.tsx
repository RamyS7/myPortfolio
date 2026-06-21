import Link from 'next/link';
import React from 'react';
import NavBar from './navBar';
import { Button } from './button';
import MobileNav from './MobileNav';
const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-primary text-white">
      <div className='container mx-auto flex justify-between items-center '>
        {/*Logo */}
        <Link href="/">
          <h1 className='text-4xl  font-semibold'>
            Ramy <span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-8 items-center">
          <NavBar />
          <Link href="/contact" className='ml-8'>
            <Button variant="outline" size="lg">Contact</Button>
          </Link>
        </div>
        <div className='xl:hidden'> <MobileNav /></div>
      </div>
    </header>
  );
};

export default Header;
