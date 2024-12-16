import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../public/logo.svg'

import './header-base.module.scss'

import { headerLinks } from '@/data/headerLinks'

import HeaderMenu from './header_menu/HeaderMenu'

const HeaderBase = () => {
    return (
        <>
            <div className="logo__box">
                <Image
                    className='logo'
                    src={Logo}
                    width={303}
                    height={84}
                    alt=''
                />
            </div>
            <div className="nav__links max-md:hidden">
                <nav className="nav">
                    <ul className="nav__list">
                        {
                            headerLinks.map((item, i) => {
                                return (
                                    <li key={i} className='nav__item'>
                                        {
                                            item.href ? (
                                                <Link href={item.href} className="hover:text-accent hover:underline hover:underline-offset-4">
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <span className='hover:text-accent hover:underline hover:underline-offset-4 cursor-pointer'>
                                                    {item.name}
                                                </span>
                                            )
                                        }
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>

            <div className="nav__links md:hidden">
                <HeaderMenu />
            </div>
        </>
    )
}

export default HeaderBase
