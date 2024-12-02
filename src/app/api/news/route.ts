import { NextResponse } from 'next/server';

type NewsItem = {
  id: number
  date: string
  description: string
  imageUrl: string
}

export async function GET() {
    const newsList: NewsItem[] = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        date: `${new Intl.DateTimeFormat('ru-RU').format(new Date())}`,
        description: `Описание новости ${i + 1}`,
        imageUrl: `https://via.placeholder.com/600x400?text=Новость+${i + 1}`,
    }));
    console.log(`NEWSLIST ${newsList}`)
    return NextResponse.json(newsList);
}
