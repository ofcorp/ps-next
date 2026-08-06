'use client';

import { JSX, useState } from 'react';
import cn from 'classnames';
import styles from './LikeButton.module.css';
import LikeIcon from '../LikeIcon/LikeIcon';

export default function LikeButton(): JSX.Element {
  const [liked, setLiked] = useState<boolean>(false);

  const handleClick = (): void => {
    setLiked(!liked);
  };

  return (
    <button onClick={handleClick} className={cn(styles.likebutton, { [styles.liked]: liked })}>
      <LikeIcon fill={liked ? '#F5F5F5' : 'none'} />
    </button>
  );
}
