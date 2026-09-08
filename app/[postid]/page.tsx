import { getPostById } from '@/api/posts';
import { notFound } from 'next/navigation';
import { JSX } from 'react/jsx-runtime';
import styles from './page.module.css';
import Title from '@/components/Title/Title';
import Like from '@/components/Like/Like';
import LikeButton from '@/components/LikeButton/LikeButton';
import parse from 'html-react-parser';

export default async function PostPage({
  params,
}: {
  params: { postid: string };
}): Promise<JSX.Element> {
  const { postid } = await params;
  const post = await getPostById(postid);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.wrapper}>
      <Title tag={'h1'}>{post.title}</Title>
      <div className={styles.params}>
        <span>Front-end</span>·<span>1 месяц назад</span>·<span>1 месяц назад</span>·
        <Like count={2} />
      </div>
      <div
        className={styles.image}
        style={{
          backgroundImage: 'url(/photo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className={styles.text}>{parse(post.body)}</div>
      <div className={styles.likeme}>
        Понравилось? Жми
        <LikeButton postId={post.id} />
      </div>
    </div>
  );
}
