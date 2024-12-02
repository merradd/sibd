import React from 'react'
import Image from 'next/image';

import './news-feed-card.module.scss'

interface NewsCardProps {
    news: {
        imageUrl: string;
        id: number;
        date: string;
        description: string;
    }
}

const NewsFeedCard = ({ news }: NewsCardProps) => {
    return (
        <div className={`news-item item-${news.id}`}>
            <Image
                className='news-item__image'
                src={news.imageUrl}
                width={400}
                height={400}
                alt=''
            />
            <div
                className={`news-item__text text-item-${news.id}`}
            >
                <h2 className='text-primary'>{news.date}</h2>
                <p>{news.description}</p>
            </div>
        </div>
    )
}

export default NewsFeedCard
