'use client'

import React, { useState } from 'react'
import './header-news.module.scss'
import Logo from '../../../../public/logo.svg';
import Image/*, { StaticImageData } */ from 'next/image';

import Image1 from '../../../../public/news_banner_images/students_performance.png';
import Image2 from '../../../../public/news_banner_images/students_performance.png';
import Image3 from '../../../../public/news_banner_images/students_performance.png';

import SearchIcon from '../../../../public/news_header_icons/search_icon.svg'
import HomeIcon from '../../../../public/news_header_icons/home_icon.svg'

import Link from 'next/link';

const HeaderNews = () => {
    const [currentBannerImage, setCurrentBannerImage] = useState<StaticImageData>(Image1);

    const newsNav = ['НАУКА', 'МЕДИА', 'ИНСТИТУТ'];

    const handleBannerChange = (image: StaticImageData) => {
        setCurrentBannerImage(image);
    };

    return (
        <header className='header bg-primary'>
            <div className='header__container flex w-full py-6'>
                <div className='header__logo'>
                    <Image
                        className='header__logo-image py-6'
                        src={Logo}
                        alt="Logo"
                        width={800}
                        height={600}
                        priority
                    />
                </div>

                <div className='header__data flex'>
                    <div className='header__nav flex'>
                        <ul className='header__nav-list flex pt-5'>
                            {newsNav.map((navItem: string, index: number) => (
                                <li key={index} className='header__nav-item'>
                                    <button
                                        className='text-white hover:text-accent hover:underline hover:underline-offset-4'
                                        onClick={() => handleBannerChange([Image1, Image2, Image3][index])}
                                    >
                                        {navItem}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="header__icons flex h-full">
                        <div className="header__icon-search flex h-full items-center">
                            <button aria-label='Найти новость'>
                                <Image src={SearchIcon} className='header__icon--setSizes' alt="Поиск" width={32} height={32} />
                            </button>
                        </div>
                        <div className="header__icon-home flex h-full items-center">
                            <Link href="/">
                                <Image src={HomeIcon} className='header__icon--setSizes' alt="Вернуться на главную" width={32} height={32} />
                            </Link>.
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderNews;
