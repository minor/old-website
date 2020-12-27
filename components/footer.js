import utilStyles from '../styles/utils.module.css'
import ToggleTheme from "./ToggleTheme";
import Link from 'next/link'
import NowPlaying from './nowPlaying'

export default function Footer() {
  return (
    <div>
      <br />
      <section className={utilStyles.headingNavigation}>
        <div className={utilStyles.navigation}>
          <Link href="/"><a>Home</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="/about"><a>About</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="mailto:me@saurish.com?subject=Hello from the Website!">Contact</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="/projects"><a>Projects</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/blog">Blog</a>
        </div>
      </section>
      <br />
      <section className={utilStyles.social}>
        <a target="_blank" href="https://www.facebook.com/saurish.srivastava.10/">
          <img className={utilStyles.titlelogo} src="/images/facebook.svg"></img>
        </a>
        <a target="_blank" href="https://twitter.com/saurishhh">
        <img className={utilStyles.titlelogo} src="/images/twitter.svg/"></img>
        </a>
        <a target="_blank" href="https://www.instagram.com/saurishhh/">
        <img className={utilStyles.titlelogo} src="/images/insta.svg"></img>
        </a>
        <a target="_blank" href="https://github.com/minor/">
        <img className={utilStyles.titlelogo} src="/images/github.svg"></img>
        </a>
      </section>
      <br />
      <NowPlaying />
      <section className={utilStyles.headingFooter}>
        <p><center>&copy; Copyright 2020 - Saurish Srivastava</center></p>
      </section>
      <ToggleTheme />
    </div>
  )
}
