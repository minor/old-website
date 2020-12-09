import Head from 'next/head'
import Footer from '../components/footer'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <Layout projects>
      <Head>
        <title>{siteTitle}: Projects</title>
      </Head>
      <header className={utilStyles.header}>
        <h2 className={utilStyles.heading2Xl}>Projects</h2>
      </header>
      <section className={utilStyles.headingMd}>
        <p>
          I've been working on a couple of projects listed below.
          <br /><br />
          1: A <Link href="/maskswork">Masks Work</Link> page which has a compliation of a few articles that explain <b>how</b> and <b>why</b> masks work. I made this back in August when there was
          a lot of misinformation going around on social media platforms like Twitter and Instagram. I haven't been updating this site as much as I wanted to, though I'm hopeful that everyone is aware what
          masks can do for us during this global pandemic.
          <br /><br />
          2: A <Link href="/bookreviews">Books Review</Link> page which, as the name implies, has a list of books that I've read over quarantine and a general review of them.
          <br /><br />
          Check out my <a href="https://github.com/minor/">GitHub</a> for more projects.
        </p>
      </section>
      <br />
      <Footer />
    </Layout>
  )
}
