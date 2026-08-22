'use client';

import { createContext, JSX } from 'react';
import GithubLink from '../GithubLink/GithubLink';

export const ShowGithubContext = createContext<string>('');

export default function ShowGithub(): JSX.Element {
  return (
    <ShowGithubContext.Provider value={'https://www.github.com/yourusername'}>
      <GithubLink />
    </ShowGithubContext.Provider>
  );
}
