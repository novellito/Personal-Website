import React from 'react';
import NavLinks from './NavLinks';
import styles from '@/styles/MiniNav.module.scss';

const handleClick = () => {
  // @ts-ignore
  const [elem] = document.getElementsByClassName(styles['mobile-menu']);
  // @ts-ignore
  const [elem2] = document.getElementsByClassName(styles.line);
  elem.classList.toggle(styles.open);
  elem2.classList.toggle(styles.open);
};

const MiniNav = () => {
  return (
    <nav id="mobile-nav">
      <div className={styles['mobile-menu']}>
        <NavLinks mobile={styles.mobileLinks} />
        <button
          onClick={() => handleClick()}
          aria-label="Hamburger mobile menu"
        >
          <div id="mobile-nav-lines" className={`${styles.line}`}>
            <span className="dark:bg-[#1f1f1f]" />
            <span className="dark:bg-[#1f1f1f]" />
            <span className="dark:bg-[#1f1f1f]" />
            <span className="dark:bg-[#1f1f1f]" />
          </div>
        </button>
        <div
          id="mobile-nav-circle"
          className={`bg-[#1f1f1f] dark:bg-white ${styles.circle}`}
        />
      </div>
    </nav>
  );
};

export default MiniNav;
