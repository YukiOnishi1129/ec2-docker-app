import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { BaseArea } from '@/components/layout/BaseArea';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseArea>
      <Component {...pageProps} />
    </BaseArea>
  );
}

export default MyApp;
