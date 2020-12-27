import Head from 'next/head'
import Footer from '../components/footer'
import Emoji from 'a11y-react-emoji'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}: Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <Emoji symbol="👋🏽" label="Hello" /> , I’m <strong>Saurish</strong>! I’m the president and executive director at{' '}
          <a href="https://envisionnew.org/">Project enVision U.S.</a>, a 501(c)(3) non-profit organization dedicated to increasing
          the accessibility of education <strong>everywhere</strong>.
          I'm an avid debater and a photography hobbyist. Visit the <Link href="/about"><a>about me</a></Link> page to learn more about me!
        </p>
      </section>
      <section className={utilStyles.container}>
        <div className={utilStyles.fixedwrapper}>
          <section id={utilStyles.terminal}>
            <div id={utilStyles.terminalcontainer}>
              <div className={utilStyles.terminal}>
                <div className={utilStyles.windowtitle}>
                  <div className={utilStyles.winbuttons}>
                    <a id={utilStyles.close} className={utilStyles.button} href="#"></a>
                    <a id={utilStyles.min} className={utilStyles.button} href="#"></a>
                    <a id={utilStyles.max} className={utilStyles.button} href="#"></a>
                  </div>
                  <span className={utilStyles.title}>~oh-my-zsh~</span>
                </div>
                <div className={utilStyles.message}>
                  <span className={utilStyles.prompt}><span className={utilStyles.user}>saurish</span><span className={utilStyles.at}>@</span><span className={utilStyles.path}>/home/saurish/</span>&gt;<span className={utilStyles.caret}>$ </span>start saurish.life</span>
                  <form>&gt;<span className={utilStyles.caret}>$ </span>education: sophomore @ {' '}<a href="https://evhs.schoolloop.com/">evergreen valley high school</a></form>
                  <form>&gt;<span className={utilStyles.caret}>$ </span>hobbies: debate, volleyball, hiking, photography, robbing the nearest nothingbundtcakes</form>
                  <form>&gt;<span className={utilStyles.caret}>$ </span>relevant coursework: ap calc ab, ap physics 1</form>
                  <form>&gt;<span className={utilStyles.caret}>$ </span>clubs: biomedical engineering, synthetic biology, speech and debate, programming, volleyball</form>
                </div>
              </div>
            </div>
          </section> 
        </div>
      </section>
      <br />
      <Footer />
    </Layout>
  )
}