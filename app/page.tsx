import CardMini from '@/components/CardMini/CardMini';
import styles from './page.module.css';
import { JSX } from 'react/jsx-runtime';

const cardData = {
  title: 'Как работать с CSS Grid',
  description:
    'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
  imageUrl: './image1.png',
  category: 'Front-end',
  postedAt: '1 месяц назад',
  likes: 4,
  linkUrl: 'article/1',
  readTime: '3 минуты',
};

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <CardMini {...cardData} />
    </main>
  );
}
