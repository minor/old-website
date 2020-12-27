import Head from 'next/head'
import Footer from '../components/footer'
import Emoji from 'a11y-react-emoji'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}: About Me</title>
      </Head>
      <header className={utilStyles.header}>
        <h2 className={utilStyles.heading2Xl}>About Me</h2>
        <h2 className={utilStyles.headingLg}>Leader/Athlete/Debater</h2>
      </header>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! I’m <strong>Saurish</strong>, a sophomore at {' '}<a href="https://evhs.schoolloop.com/">Evergreen Valley High School</a>.
          I love coding and enjoy messing around in different areas of computer science! I'm currently exploring
          {' '}<a href="https://www.tensorflow.org/.org/">TensorFlow</a> and {' '}<a href="https://nextjs.org/">Next.js</a>!
          <br /><br />
          But, my true passion is: biology. I'm just fascinated by specific topics, such as oncology and neurology. I also really
          like taking <Emoji symbol="📸" label="camera" />{' '}(model and nature), which you can find on my {' '}<a href="https://unsplash.com/@saurishs/">Unsplash page</a>.
          <br /><br />
          I’m the president and executive director at <a href="https://envisionnew.org/">Project enVision</a>, a non-profit organization dedicated to the <strong>community</strong>.
          Our mission is to create a connected community where education is free and accessible. With COVID-19 removing most in-person contact, we've been committed to
          helping students from different communities through <strong>online services</strong>. I'm in charge of leading all active projects, managing the team, and teaching! 
          <br /><br />I'm also an avid debater! I participate in Lincoln Douglas on the National Circuit. As of November, I have allocated 1 bid to the
          Tournament of Champions and have reached 2 bid rounds, while reading a variety of different
          {' '}<a href="https://hsld.debatecoaches.org/Evergreen%20Valley/Srivastava%20Neg">arguments</a>. If you have any questions, feel free 
          to <a href="mailto:me@saurish.com?subject=Hello from the Website!">contact me</a>.<br /><br />
          <hr />
          <br />Relevant coursework: AP Biology, AP Calculus BC, AP Calculus AB, AP Physics 1
          <br /><br />Clubs: Head Captain in Speech and Debate, secretary of Synthetic Biology, secretary of Volleyball, member of Biomedical Engineering, 
          member of Programming.
        </p>
      </section>
      <section>
          <img className={utilStyles.img} src="/images/me.jpg" alt="Saurish Srivastava"></img>
      </section>
      <br />
      <hr style={{width: '61.5%'}} />
      <Footer />
    </Layout>
  )
}
