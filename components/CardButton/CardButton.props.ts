import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  children: ReactNode;
}
