import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Emoji from 'a11y-react-emoji';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 my-8" />
  );
};

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="Saurish Srivastava: About Me"
        canonical="https://www.saurish.com/about"
        openGraph={{
          url: 'https://www.saurish.com/about',
          title: 'Saurish Srivastava: About Me'
        }}
      />
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <br />
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Leader/Athlete/Debater
        </h2>
        <br />
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
          Hello there! I’m <span className="font-bold">Saurish</span>, a sophomore at <a href="https://evhs.schoolloop.com" target="_blank" rel="noopener noreferrer">Evergreen Valley High School</a>.
          I love coding and enjoy messing around in different areas of computer science! I'm currently exploring <a href="https://www.tensorflow.org/TensorFlow" target="_blank" rel="noopener noreferrer">TensorFlow</a> 
          {' '}and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> (this website is built with Next.js and Tailwind CSS)!
          <br />
          <br />
          But, my true passion is: biology. I'm fascinated by fields such as oncology and neurology. I also really like taking <Emoji symbol="📸" label="Hello" /> (model and nature), which you can find on my <a href="https://unsplash.com/@saurishs/" target="_blank" rel="noopener noreferrer">Unsplash page</a>.
          <br />
          <br />
          I’m the president and executive director at <a href="https://envisionnew.org/" target="_blank" rel="noopener noreferrer">Project enVision U.S.</a>, a non-profit organization dedicated to the <span className="font-bold">community</span>.
          Our mission is to create a connected community where education is free and accessible. With COVID-19 removing most in-person contact, we've been committed to helping students from different communities through <span className="font-bold">online services</span>.
          I'm in charge of leading all active projects, managing the team, and teaching!
          <br />
          <br />
          I'm also an avid debater! I participate in Lincoln Douglas on the National Circuit. As of December, I have allocated 1 bid to the Tournament of Champions and have reached 2 bid rounds,
          while reading a variety of different <a href="https://hsld.debatecoaches.org/Evergreen%20Valley/Srivastava%20Neg" target="_blank" rel="noopener noreferrer">arguments</a>.
          If you have any questions, feel free to <a href="mailto:me@saurish.com?subject=Hello%20from%20the%20Website!" target="_blank" rel="noopener noreferrer">contact me</a>.
          </p>
          <Divider />
          <p>Relevant coursework: AP Biology, AP Calculus BC, AP Calculus AB, AP Physics 1
          <br />
          <br />
          Clubs: Head Captain in Speech and Debate, secretary of Synthetic Biology, secretary of Volleyball, member of Biomedical Engineering, member of Programming.</p>
        </div>
        <img className="rounded-2xl" src="/images/me.jpg" alt="Saurish Srivastava"></img>
      </div>
    </Layout>
  );
}
