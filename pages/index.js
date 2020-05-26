import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Frontend Developer</h2>
        <hr/>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, description, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {description}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}