import Head from 'next/head';
import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
// import '../styles/globals.scss';
import '@/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
