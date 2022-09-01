import { Fade } from 'react-awesome-reveal';
import styles from '@/styles/Hero.module.scss';
import HeroLinks from '@/components/ui/HeroLinks';
import HeroAvatar from '@/components/ui/HeroAvatar';

const Hero = () => {
  return (
    <Fade duration={1700} triggerOnce>
      <section className=" md:flex items-center mx-auto mt-8 max-w-screen-md md:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="intro p-5 md:p-10 text-center md:flex-1">
          <p className="m-0 text-5xl md:text-left md:text-6xl">Hello! 👋</p>
          <p className="text-slate-500 my-6 text-xl md:text-left md:text-2xl">
            I&apos;m <span className="text-blue-500">Christian Trinidad.</span>{' '}
            A Software Engineer with a passion for tech 😎. Always learning.
          </p>
          <HeroLinks />
          <a
            href={'/christianTrinidad_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className={`md:float-left ${styles['resume-btn']}`}
            aria-label="link to my resume"
          >
            Résumé
          </a>
        </div>
        <div className="avatar md:flex-1 px-6 md:px-0">
          <HeroAvatar />
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
