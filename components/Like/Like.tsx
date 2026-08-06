import { JSX } from 'react/jsx-runtime';
import { LikeProps } from './Like.props';
import LikeIcon from '../LikeIcon/LikeIcon';
import styles from './Like.module.css';

export default function Like({ count }: LikeProps): JSX.Element {
  return (
    <div className={styles.like}>
      {count} <LikeIcon />
    </div>
  );
}
