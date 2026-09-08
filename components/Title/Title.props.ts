import { ReactNode } from 'react';

export interface TitleProps {
  tag: 'h0' | 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
