import ArrowIcon from './ArrowIcon';
import styles from './CardButton.module.css';
import { ButtonProps } from './CardButton.props';
import { JSX } from 'react/jsx-runtime';

export default function CardButton({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      {children}
      <ArrowIcon />
    </button>
  );
}
