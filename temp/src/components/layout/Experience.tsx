import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import styles from '@/styles/Experience.module.scss';

const timelineElementContents = [
  {
    title: 'Software Engineer II',
    subtitle: 'Playstation',
    content: (
      <p>
        Currently working on a product which helps hundreds of designers,
        engineers, and copyrighters collaborate and build new Playstation
        features across multiple platforms.
      </p>
    ),
    dates: 'December 2021 - Present',
    logo: (
      <div className={styles.nbc}>
        <Image
          src={'/playstation.png'}
          alt={'Playstation logo'}
          layout="responsive"
          width={50}
          height={35}
          objectFit={'contain'}
        />
      </div>
    ),
  },
  {
    title: 'Software Engineer',
    subtitle: 'NBCUniversal',
    content: (
      <p>
        Former frontend lead for an app used to manage contracts for the Peacock
        streaming service. I was also responsible for handling deployments and
        managing our resources in AWS.
      </p>
    ),
    dates: 'July 2018 - December 2021',
    logo: (
      <div className={styles.nbc}>
        <Image
          src={'/nbc.png'}
          alt={'NBC Universal logo'}
          layout="responsive"
          width={50}
          height={35}
          objectFit={'contain'}
        />
      </div>
    ),
  },
  {
    title: 'BS in Computer Science',
    subtitle: 'CSU Northridge',
    content: <p>Deans List Fall 2014 - Spring 2018 • GPA: 3.6 (Cum Laude)</p>,
    dates: 'April 2017 - May 2018',
    logo: (
      <Image
        src={'/csun.png'}
        alt={'CSUN logo'}
        layout="responsive"
        width={150}
        height={150}
        objectFit={'cover'}
      />
    ),
  },
  {
    title: 'Web Developer & Tech Support Specialist',
    subtitle: 'CSUN Distance Learning Center & CSUN Career Center',
    content: (
      <p>
        I created
        <a
          href="https://github.com/novellito/Tseng-Utilities"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-[#82b1ff96] duration-200 text-blue-500 no-underline"
        >
          {' '}
          two apps{' '}
        </a>
        that simplified faculty workflows. I also facilitated one on one
        trainings with professors regarding school software and conducted qa
        checks on our sites for accessibility. Prior to the Distance Learning
        Center, I also worked at our career center where I created content using
        various web technologies and also assisted our graphic designers in
        planning layouts for our sites.
      </p>
    ),
    dates: 'April 2017 - May 2018',
    logo: (
      <Image
        src={'/csun.png'}
        alt={'CSUN logo'}
        layout="responsive"
        width={150}
        height={150}
        objectFit={'cover'}
      />
    ),
  },
];

const Experience = () => {
  return (
    <section id={styles.experience} className="overflow-x-hidden px-4 pt-8">
      <h1 className="text-center text-3xl my-0">Experience</h1>
      <VerticalTimeline className={styles['vertical-timeline']}>
        {timelineElementContents.map((elem, key) => {
          return (
            <VerticalTimelineElement
              key={key}
              contentStyle={{ boxShadow: '0 3px 0 #6272a4' }}
              textClassName="dark:bg-[#282a36]"
              contentArrowStyle={{ borderRight: '7px solid #6272a4' }}
              iconStyle={{
                boxShadow:
                  '0 0 0 4px #fff, inset 0 0px 0 rgba(0, 0, 0, 0.08),0 3px 0 4px rgba(0, 0, 0, 0.05)',
                background: 'white',
              }}
              dateClassName={styles.dates}
              date={elem.dates}
              icon={elem.logo}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold text-[#1f2933] dark:text-white">
                {elem.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-[#1f2933] dark:text-white">
                {elem.subtitle}
              </h4>
              {elem.content}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <p className="text-lg text-center">
        Please see my{' '}
        <a
          href={'/christianTrinidad_Resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#82b1ff96] duration-200 text-blue-600 font-bold no-underline resume-link"
          aria-label="link to my resume"
        >
          résumé
        </a>{' '}
        for more details.
      </p>
    </section>
  );
};

export default Experience;
