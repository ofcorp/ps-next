import { JSX } from 'react';
import CardMini from '@/components/CardMini/CardMini';
import styles from './page.module.css';
import LikeButton from '@/components/LikeButton/LikeButton';
import { getPosts } from '@/api/posts';

const postId = 1;

export default async function Home(): Promise<JSX.Element> {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <CardMini
            key={post.id}
            title={post.title}
            description={post.body}
            category="Front-end"
            postedAt=""
            likes={0}
            imageUrl="/image1.png"
            linkUrl={`/${post.id}`}
            readTime=""
          />
        ))}
      </div>
      <LikeButton postId={postId} />
    </main>
  );
}
