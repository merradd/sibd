import React from 'react';
import './banner-area.module.scss';
import Image from 'next/image';

import BannerImage from '../../../../public/news_banner_images/students_performance.png'

const BannerArea = () => {
    return (
        <section className='banner w-full'>
            <div className='banner__wrapper w-full'>
                <div className='banner__wrapper--position'>
                    <h1 className='font-semibold ml-4'>Наука</h1>
                    <hr className='w-full border-accent my-4 max-md:my-2' />
                    <div className='banner__area flex justify-between mx-4'>
                        <div className='flex w-full'>
                            <Image
                                className='banner__area__image'
                                src={BannerImage}
                                alt='Наука'
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className='banner__area__text flex w-full flex-col justify-center'>
                            <h2 className='font-semibold'>Студенты СИБД на Открытом лектории</h2>
                            <p>17 июня Кулагин Мстислав и Ян Коба
                                выступили в рамках проекта «Равный обучает равного»
                                с докладом, который ранее был представлен
                                на молодёжном конкурсе аналитических проектов!</p>
                        </div>
                    </div>
                    <hr className='w-full border-accent mt-4' />
                </div>
            </div>
        </section>
    )
}

export default BannerArea
