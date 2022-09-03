import Link from 'next/link';
import Image from 'next/image';

export default function FourOhFour() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Page not found!</h1>
      <Image
        src={'/404.png'}
        alt={'404 page not found Image'}
        layout="responsive"
        width={50}
        height={35}
        objectFit={'contain'}
      />
      <p className="text-xl">
        Sorry 😔 we couldn’t find what you were looking for.
        <br />{' '}
        <Link href="/">
          <a className="hover:text-[#82b1ff96] duration-200 text-blue-500 no-underline">
            Go back home
          </a>
        </Link>
        .
      </p>
    </div>
  );
}
