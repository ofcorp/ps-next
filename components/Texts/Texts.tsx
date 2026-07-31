import { JSX } from 'react/jsx-runtime';
import { TextsProps } from './Texts.props';
import styles from './Texts.module.css';

export default function Texts({ children }: TextsProps): JSX.Element {
  return <p className={styles.texts}>{children}</p>;
}
