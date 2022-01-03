import React from 'react';
import { Header } from '@/components/layout/Header';

interface Props {
  children: React.ReactChild;
}

export const BaseArea: React.VFC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
