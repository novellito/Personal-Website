import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroLinks from '../ui/HeroLinks';

export const Footer = () => {
  return (
    <footer
      className="flex flex-col justify-center items-center 
                  text-center pt-9 pb-3 bg-gradient-to-r from-[#21d4fd] 
                  to-[#3321ff] dark:bg-[#282a36] dark:bg-none"
    >
      <HeroLinks linkGap="gap-x-10" />
      <p className="text-white my-4">
        Made with{' '}
        <FontAwesomeIcon className="themeToggler text-red-400" icon={faHeart} />{' '}
        by Christian Trinidad
      </p>
    </footer>
  );
};
export default Footer;
