import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '@/styles/globals.scss';
import SEO from '@/components/SEO';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title="Christian Trinidad"
        description="Christian Trinidad's portfolio website."
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-113712213-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-113712213-1');
        `}
      </Script>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>{' '}
    </>
  );
}

export default App;
