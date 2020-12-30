import Layout from '../../components/layout'
import Footer from '../../components/footer'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <header className={utilStyles.header}>
        <h2 className={utilStyles.headingLg}>{postData.title}</h2>
      </header>
      <article>
        <div className={utilStyles.lightText}>
          <p>{postData.author}</p>
          <center><Date dateString={postData.date} /></center>
        </div>
        <div className={utilStyles.blogText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
