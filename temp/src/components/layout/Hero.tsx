// import resume from '../data/christianTrinidad_Resume.pdf';
// import { Fade } from 'react-awesome-reveal';
import styles from '@/styles/hero.module.scss';
import HeroLinks from '@/components/HeroAvatar/HeroLinks';
import HeroAvatar from '@/components/HeroAvatar/HeroAvatar';
// const HeroSection = styled.section`
//   /* ${tw`md:flex items-center`}
//   ${tw`mx-auto`}
//   ${tw`mt-8`}
//   ${tw`max-w-screen-md md:max-w-screen-lg 2xl:max-w-screen-xl`} */
//   .avatar svg {
//     max-width: 100%;
//     height: auto;
//   }
//   p {
//     color: #616e7c;
//   }
//   .resume-btn {
//     display: inline-block;
//     text-decoration: none;
//     color: white;
//     padding: 15px 15px;
//     margin-top: 25px;
//     margin-bottom: 20px;
//     border-radius: 4px;
//     width: 140px;
//     cursor: pointer;
//     font-size: 18px;
//     transition: all 0.2s ease-in-out;
//     /* ${tw`bg-blue-600 h-auto font-bold border-0`} */
//     &:hover {
//       box-shadow: 0 5px 15px #37383a;
//     }
//   }
// `;

const Hero = () => {
  return (
    <div className="md:flex items-center">
      <div className="intro p-5 md:p-10 text-center md:flex-1">
        <h1 className="m-0 text-4xl md:text-left md:text-6xl">Hello! 👋</h1>
        <p className="text-slate-500 text-xl md:text-left md:text-2xl">
          I'm <span className="text-blue-500">Christian Trinidad.</span> A
          Software Engineer with a passion for tech 😎. Always learning.
        </p>
        <HeroLinks />
        <div className="btn-container md:flex">
          <a
            // href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['resume-btn']}
            aria-label="link to my resume"
          >
            Résumé
          </a>
        </div>
      </div>
      <div className="avatar md:flex-1">
        <HeroAvatar />
      </div>
    </div>
  );
};
// <Fade duration={1700} triggerOnce>
{
  /* </Fade> */
}

export default Hero;
