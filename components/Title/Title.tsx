import { TitleProps } from './Title.props';
import styles from './Title.module.css';
import { JSX } from 'react/jsx-runtime';

export default function Title({ tag, children }: TitleProps): JSX.Element {
  return <h2 className={styles[tag]}>{children}</h2>;
}
