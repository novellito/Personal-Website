import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import styles from '@/styles/AboutMe.module.scss';

const CarouselImage = (props: { src: string; alt: string }) => {
  return (
    <div className={styles['img-container']}>
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        width={150}
        height={150}
        objectFit={'cover'}
      />
    </div>
  );
};

const images = [
  {
    src: '/trini_ny.jpg',
    alt: 'a picture of me in new york',
  },
  {
    src: '/trini_solo.jpg',
    alt: 'a picture of me',
  },
  {
    src: '/trini_grad.jpg',
    alt: 'a picture of me during graduation',
  },
];

const AboutMe = () => {
  return (
    <Fade duration={1700} triggerOnce>
      <section
        id={styles.about__content}
        className="py-12 px-10 md:px-16 relative bg-gradient-to-r from-[#21d4fd] to-[#3321ff] dark:bg-[#282a36] dark:bg-none"
      >
        <div className="text-center">
          <h1 className="text-white mb-8 text-center md:hidden">Who Am I?</h1>
          <Carousel
            className="flex justify-center"
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            swipeable={false}
            width={'150px'}
          >
            {images.map((img, key) => (
              <CarouselImage src={img.src} alt={img.alt} key={key} />
            ))}
          </Carousel>
        </div>
        <div className="about-text">
          <h1 className="text-white text-2xl mb-5 hidden md:block text-left">
            Who Am I?
          </h1>
          <p className="text-white my-4 leading-6 text-center md:text-left">
            I&apos;m a Software Engineer with 4 years of experience developing
            web applications. I received my Computer Science degree from
            California State University Northridge. Outside the world of
            programming, I enjoy working out, eating, and growing my keyboard
            collection.
          </p>
        </div>
      </section>
    </Fade>
  );
};

export default AboutMe;
{
  /* 
        used for experimenting with divider shape
        className={styles['shape-fill']}
      <div className={styles['custom-shape-divider-bottom-1661976238']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="header-shape-gradient"
              x1="0.01"
              y1="0.41"
              x2="0.99"
              y2="0.59"
            >
              <stop offset="0%" stop-color="#21d4fd" />
              <stop offset="100%" stop-color="#3321ff" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles['shape-fill']}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles['shape-fill']}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={styles['shape-fill']}
          ></path>
        </svg>
      </div> */
}
