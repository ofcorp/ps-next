'use client';

import { JSX, useState } from 'react';
import cn from 'classnames';
import styles from './LikeButton.module.css';
import LikeIcon from '../LikeIcon/LikeIcon';
import { LikeButtonProps } from './LikeButton.props';

export default function LikeButton(id: LikeButtonProps): JSX.Element {
  const [liked, setLiked] = useState<boolean>(false);

  const handleClick = async (): Promise<void> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
      });
      if (!response.ok) throw new Error('Request failed');
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  return (
    <button onClick={handleClick} className={cn(styles.likebutton, { [styles.liked]: liked })}>
      <LikeIcon fill={liked ? '#F5F5F5' : 'none'} />
    </button>
  );
}
