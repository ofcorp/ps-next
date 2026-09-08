import Link from 'next/link';
import ArrowIcon from './ArrowIcon';
import styles from './CardButton.module.css';
import { ButtonProps } from './CardButton.props';
import { JSX } from 'react/jsx-runtime';

export default function CardButton({ link, children, ...props }: ButtonProps): JSX.Element {
  return (
    <Link href={link} className={styles.button} {...props}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
