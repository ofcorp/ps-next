'use client';

import { JSX, useState } from 'react';
import CardMini from '@/components/CardMini/CardMini';
import styles from './page.module.css';
import LikeButton from '@/components/LikeButton/LikeButton';

const cardsData = [
  {
    cardId: 1,
    title: 'Как работать с CSS Grid',
    description:
      'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
    imageUrl: './image1.png',
    category: 'Front-end',
    postedAt: '1 месяц назад',
    likes: 4,
    linkUrl: 'article/1',
    readTime: '3 минуты',
  },
  {
    cardId: 2,
    title: 'Как работать с CSS Grid',
    description:
      'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
    imageUrl: './image1.png',
    category: 'Front-end',
    postedAt: '1 месяц назад',
    likes: 4,
    linkUrl: 'article/1',
    readTime: '3 минуты',
  },
  {
    cardId: 3,
    title: 'Как работать с CSS Grid',
    description:
      'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
    imageUrl: './image1.png',
    category: 'Front-end',
    postedAt: '1 месяц назад',
    likes: 4,
    linkUrl: 'article/1',
    readTime: '3 минуты',
  },
];

const postId = 1;

export default function Home(): JSX.Element {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = async (): Promise<void> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ liked: !liked }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setLiked((currentLiked) => !currentLiked);
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {cardsData.map((cardData) => (
          <CardMini key={cardData.cardId} {...cardData} />
        ))}
      </div>
      <LikeButton liked={liked} onLike={handleLike} />
    </main>
  );
}
