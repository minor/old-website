import Layout from '../components/layout';
import Terminal from '../components/Terminal';
import Emoji from 'a11y-react-emoji';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Saurish Srivastava
        </h1>
        <br />
        <h2 className="text-gray-600 dark:text-gray-400 mb-16 text-xl items-start">
          <Emoji symbol="👋🏽" label="Hello" /> , I’m <strong>Saurish</strong>! I’m the president and executive director at{' '}
          <a className="underline" href="https://envisionnew.org/">Project enVision U.S.</a>, a 501(c)(3) non-profit organization dedicated to increasing
          the accessibility of education <strong>everywhere</strong>.
          I'm an avid debater and a photography hobbyist. Visit the <Link href="/about"><a className="underline">about me</a></Link> page to learn more about me!
        </h2>
        <Terminal />
      </div>
    </Layout>
  );
}
