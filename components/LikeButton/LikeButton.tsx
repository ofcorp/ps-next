'use client';

import { JSX, useState } from 'react';
import cn from 'classnames';
import styles from './LikeButton.module.css';
import LikeIcon from '../LikeIcon/LikeIcon';

export default function LikeButton({ postId }: { postId: number }): JSX.Element {
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
    <button onClick={handleLike} className={cn(styles.likebutton, { [styles.liked]: liked })}>
      <LikeIcon fill={liked ? '#F5F5F5' : 'none'} />
    </button>
  );
}
