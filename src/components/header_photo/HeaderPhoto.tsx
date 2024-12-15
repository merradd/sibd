import React from 'react'

import HeaderBase from '../header_base/HeaderBase'

import './header-photo.module.scss'

interface HeaderPhotoProps {
    headline: string;
    urlPhoto: string;
}

const HeaderPhoto: React.FC<HeaderPhotoProps> = ({ headline, urlPhoto }) => {
    return (
        <header
            className='header 
        w-full w-[100svw] max-w-[1920px] 
        text-white'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/bg_photos_header/${urlPhoto})`,
                // backgroundImage: `url(/bg_photos_header/${urlPhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="header__wrapper
            h-full
            flex flex-col justify-between
            menu__active">
                <div className="header__box flex justify-between items-center">
                    <HeaderBase />
                </div>
                <div className="header__headline 
                uppercase font-extrabold
                ">
                    <p>
                        {headline}
                    </p>
                </div>
            </div>
        </header>
    )
}

export default HeaderPhoto;
