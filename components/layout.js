import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { NextSeo } from 'next-seo';
import Link from 'next/link'

const name = 'Saurish Srivastava'
export const siteTitle = 'Saurish Srivastava'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="SIjCpAkrChhv5gxAW9PcjzHvnOvnK0ttzzCpq4u1qx0" />
        <title>{siteTitle}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://saurish.com/',
          title: 'Saurish Srivastava',
          description: 'Saurish Srivastava is a high school student interested in computer science and biology.',
          images: [{
            url: 'https://og-image.now.sh/**Saurish%20Srivastava**%20.jpeg?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&images=https%3A%2F%2Fi.ibb.co%2Fq7pXDB8%2Flogo.jpg&widths=200&widths=200&heights=250&heights=200',
            alt: "Saurish Srivastava's website deployed with Vercel"
          }],
        }}
      />
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name} />
            <h1 className={utilStyles.heading3Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/"><img src="/images/profile.jpg" className={`${styles.headerImage} ${utilStyles.borderCircle}`} alt={name}/></Link>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
