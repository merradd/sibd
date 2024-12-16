'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { headerLinks } from '@/data/headerLinks';
import './header-menu.module.scss';

const HeaderMenu: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [submenuOpenStates, setSubmenuOpenStates] = useState<{ [key: string]: boolean }>({});

    const handleChange = () => {
        setIsChecked((prev) => !prev);
    };

    const handleOpen = (index: string) => {
        setSubmenuOpenStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className='relative'>
            <div className="menu__btn z-50 relative">
                <label>
                    <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                        <input
                            type="checkbox"
                            className="hidden peer"
                            aria-label="checkbox"
                            checked={isChecked}
                            onChange={handleChange}
                        />
                        <div className="w-[50%] h-[2px] bg-[#fafafa] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]" />
                        <div className="w-[50%] h-[2px] bg-[#fafafa] rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
                        <div className="w-[50%] h-[2px] bg-[#fafafa] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]" />
                    </div>
                </label>
            </div>

            <nav className={`nav ${isChecked ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed inset-0 bg-primary text-white transition-opacity duration-300`}>
                <ul className="nav__menu-list flex flex-col">
                    {headerLinks.map((item, i) => {
                        return (
                            <li key={i} className="nav__menu-item">
                                {item.href ? (
                                    <Link href={item.href} className="hover:text-accent hover:underline hover:underline-offset-4">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <div className="popup-menu">
                                        <span className="popup-menu__item" onClick={() => handleOpen(`submenu-${i}`)}>
                                            {item.name}
                                        </span>
                                        <ul className={`list__subhrefs items-center ${submenuOpenStates[`submenu-${i}`] ? 'open' : 'close'}`}>
                                            {item.submenu?.map((submenu, submenuIndex) => {
                                                return (
                                                    <li key={submenuIndex}>
                                                        <Link href={submenu.subhref} className="text-[14px] hover:text-accent hover:underline hover:underline-offset-4 cursor-pointer">
                                                            {submenu.subname}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;
