import Head from 'next/head';

export default function SEO({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={'cntrinidad.me'} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
