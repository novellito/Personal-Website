import { Fade } from 'react-awesome-reveal';
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
            className={`rounded-lg transition-all ease-in-out duration-200 mt-6
                        text-xl p-4 md:float-left w-36 bg-blue-700 hover:shadow-blue-600 
                        hover:shadow-lg inline-block text-dev no-underline text-white cursor-pointer`}
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
