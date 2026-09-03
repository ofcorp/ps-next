'use client';

import ArrowIcon from './ArrowIcon';
import styles from './CardButton.module.css';
import { ButtonProps } from './CardButton.props';
import { JSX } from 'react/jsx-runtime';

export default function CardButton({ link, children, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={styles.button}
      {...props}
      onClick={() => (window.location.href = link)}
    >
      {children}
      <ArrowIcon />
    </button>
  );
}
