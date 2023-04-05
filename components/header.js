import { navLinks } from '@/constant';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {

    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='bg-slate-600 sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-10'>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className='flex items-center gap-2' onClick={() => {
                    setActive("");
                }}>
                    <img src='logo.png' alt="logo" className='w-16 h-16 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>e-commerce</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map(link =>
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-secondary" : "text-white"} hover:text-secondary text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}>
                            <Link href={`${link.id}`}>{link.title}</Link>
                        </li>)}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? 'close.svg' : 'menu.svg'}
                        alt="menu"
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)} />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-slate-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map(link =>
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-secondary" : "text-white"} text-[16px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title)
                                    }}>
                                    <Link href={`${link.id}`}>{link.title}</Link>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;