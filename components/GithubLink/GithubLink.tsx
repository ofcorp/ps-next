'use client';

import { JSX } from 'react/jsx-runtime';
import GithubIcon from '../GithubIcon/GithubIcon';
import { useContext } from 'react';
import { ShowGithubContext } from '../ShowGithub/ShowGithub';
import Link from 'next/link';

export default function GithubLink(): JSX.Element {
  const link = useContext(ShowGithubContext);

  return (
    <Link href={link}>
      <GithubIcon />
    </Link>
  );
}
