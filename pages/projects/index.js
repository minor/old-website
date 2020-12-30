import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 my-8" />
  );
};

export default function Projects() {
  return (
    <Layout>
      <NextSeo
        title="Saurish Srivastava: Projects"
        canonical="https://www.saurish.com/projects"
        openGraph={{
          url: 'https://www.saurish.com/projects',
          title: 'Saurish Srivastava: Projects'
        }}
      />
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <br />
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
          I've been working on a couple of projects listed below:
          <br />
          <br />
          1: A <Link href="/projects/maskswork"><a>Masks Work</a></Link> page which has a compilation of a few articles that explain <span className="font-bold">how</span> and <span className="font-bold">why</span>. masks work.
          I made this back in August when there was a lot of misinformation going around on social media platforms like Twitter and Instagram. I haven't been updating this site as much as I wanted to,
          though I'm hopeful that everyone is aware what masks can do for us during this global pandemic.
          <br />
          <br />
          2: A <Link href="/projects/booksreview"><a>Books Review</a></Link> page which, as the name implies, has a list of books that I've read over quarantine and a general review of them.
          </p>
          <Divider />
          <p>Check out my <a href="https://github.com/minor/" rel="noopener noreferrer">GitHub</a> for more projects.</p>
        </div>
      </div>
    </Layout>
  );
}
