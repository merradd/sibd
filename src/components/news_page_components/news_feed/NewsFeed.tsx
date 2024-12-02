'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';

import './news-feed.module.scss'

import NewsFeedCard from './news_feed_card/NewsFeedCard'

const ITEMS_PER_PAGE = 10;

type NewsItem = {
    id: number
    date: string
    description: string
    imageUrl: string
}

const NewsFeed = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [newsList, setNewsList] = useState<NewsItem[]>([]) // Список новостей

    const currentPage = parseInt(searchParams.get('page') || '1', 10)

    // Индексы
    const [startIndex, endIndex] = [
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
    ]

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('/api/news');
                if (!res.ok) {
                    throw new Error(`Ошибка загрузки данных: ${res.status}`);
                }

                const data: NewsItem[] = await res.json();
                console.log('Новости загружены:', data);
                setNewsList(data);
            } catch (error) {
                console.error('Ошибка при загрузке новостей:', error);
            }
        };

        fetchNews();
    }, []);

    const currentNews = newsList.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        router.push(`/news?page=${page}#section-news`)
    }

    return (
        <section
            id='section-news'
            className='news-feed'
        >
            <div className='news-feed__wrapper mx-4'>
                <h2 className='flex items-center uppercase font-semibold'>
                    <span>Лента новостей</span>
                    <span className='upper-arrow'></span>
                </h2>

                <div
                    className="news-feed__block-news">
                    {currentNews.map((news) => (
                        <NewsFeedCard
                            key={news.id}
                            news={news}
                        />
                    ))}
                </div>

                <div className="pagination flex justify-between items-center">
                    {currentPage > 1 ? (
                        <button
                            className='flex items-center text-black gap-2'
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <span>
                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className='fill-black'
                                        d="M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.53841 6.65685 0.928934L0.292893 7.2929ZM26 7L1 7L1 9L26 9L26 7Z"
                                    />
                                </svg>
                            </span>
                            <span>Предыдущая</span>
                        </button>
                    ) : (
                        <button
                            className='flex items-center text-gray gap-2'
                        >
                            <span>
                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className='fill-gray'
                                        d="M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.53841 6.65685 0.928934L0.292893 7.2929ZM26 7L1 7L1 9L26 9L26 7Z"
                                    />
                                </svg>
                            </span>
                            <span>Предыдущая</span>
                        </button>
                    )}

                    {endIndex < newsList.length ? (
                        <button
                            className='flex items-center text-black gap-2'
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <span>Следующая</span>
                            <span>
                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className='fill-black'
                                        d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z"
                                    />
                                </svg>
                            </span>
                        </button>
                    ) : (
                        <button
                            className='flex items-center text-gray gap-2'
                        >
                            <span>Следующая</span>
                            <span>
                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className='fill-gray'
                                        d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z"
                                    />
                                </svg>
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default NewsFeed
