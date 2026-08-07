'use client';

import { JSX } from 'react';
import cn from 'classnames';
import styles from './LikeButton.module.css';
import LikeIcon from '../LikeIcon/LikeIcon';
import { LikeButtonProps } from './LikeButton.props';

export default function LikeButton({ liked, onLike }: LikeButtonProps): JSX.Element {
  return (
    <button onClick={onLike} className={cn(styles.likebutton, { [styles.liked]: liked })}>
      <LikeIcon fill={liked ? '#F5F5F5' : 'none'} />
    </button>
  );
}
