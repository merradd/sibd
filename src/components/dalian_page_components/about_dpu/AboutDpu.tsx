import React from 'react';

import './about-dpu.module.scss'


import VideoDpu from './video_dpu/VideoDpu';
const AboutDpu = () => {
    return (
        <section className={'about-dpu about-dpu text-black w-full'}>
            <div className='about-dpu__wrapper'>
                <div
                    className='flex flex-col gap-[10px] sm:gap-[15px]
                    mt-[30px] sm:mt-[50px]
                    xl:mt-[70px] 2xl:mt-[100px]
                    basic-text
                    '>

                    <h2 className='uppercase font-semibold'>О ДПУ</h2>

                    <p className='
                    w-full md:w-[67%]
                    lg:w-[50%]
                    2xl:w-[33%]
                    leading-[120%]
                    '>
                        Даляньский технологический университет
                        является первым официальным университетом
                        нового типа, основанным Коммунистической партией
                        Китая накануне основания Китайской Народной
                        Республики для построения промышленной
                        системы Нового Китая.
                    </p>
                </div>

                <hr className="border-t-[1px] 
                mt-[15px] mb-[30px]
                lg:mb-[50px]
                2xl:mb-[80px]
                border-black" />

                <VideoDpu />

                <hr className="border-t-[1px] 
                mt-[30px]
                lg:mt-[50px]
                2xl:mt-[80px]
                border-black 
                mb-[30px]
                md:mb-[40px]
                lg:mb-[50px]
                xl:mb-[60px]" />

            </div>
        </section>
    );
};

export default AboutDpu;
