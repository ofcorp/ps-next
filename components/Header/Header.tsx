import { JSX } from 'react/jsx-runtime';
import Image from 'next/image';
import styles from './Header.module.css';
import Title from '../Title/Title';
import GithubIcon from '../GithubIcon/GithubIcon';

export default function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <Title tag={'h1'}>.my_blog</Title>
      <Image src="/logo.png" alt="Logo" width={80} height={80} />
      <GithubIcon />
    </div>
  );
}
