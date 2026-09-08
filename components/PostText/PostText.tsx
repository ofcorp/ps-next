import { JSX } from 'react/jsx-runtime';
import { PostTextProps } from './PostText.props';
import styles from './PostText.module.css';

export default function PostText({ children }: PostTextProps): JSX.Element {
  return <p className={styles.texts}>{children}</p>;
}
