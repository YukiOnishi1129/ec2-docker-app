import React from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

export const Header: React.VFC = () => {
  return (
    <div className={styles.container}>
      <Link href={`/`} passHref>
        <h3>ホーム</h3>
      </Link>
    </div>
  );
};
