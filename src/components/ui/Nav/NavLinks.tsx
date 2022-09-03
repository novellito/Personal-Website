import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navlinks.module.scss';

const NavLinks = (props: any) => {
  return (
    <>
      <ul id="navlinks" className={`py-14 text-center ${props.mobile} `}>
        <li className="inline-block mx-5">
          <Link href="#about">
            <a className={styles.anchor}>About</a>
          </Link>
        </li>

        <li className="inline-block mx-5">
          <Link href="#skills">
            <a className={styles.anchor}>Skills</a>
          </Link>
        </li>
        <li className="inline-block mx-5">
          <Link href="#experience">
            <a className={styles.anchor}>Experience</a>
          </Link>
        </li>
        <li className="inline-block mx-5">
          <Link href="#projects">
            <a className={styles.anchor}>Projects</a>
          </Link>
        </li>
        <li className="inline-block mx-5">
          <a
            className={styles.anchor}
            href={'/christianTrinidad_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to my resume"
          >
            Résumé
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
