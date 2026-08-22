'use client';

import { createContext, JSX } from 'react';
import GithubLink from '../GithubLink/GithubLink';
import { ShowGithubProps } from './ShowGithub.props';

export const ShowGithubContext = createContext<string>('');

export default function ShowGithub({ link }: ShowGithubProps): JSX.Element {
  return (
    <ShowGithubContext.Provider value={link}>
      <GithubLink />
    </ShowGithubContext.Provider>
  );
}
