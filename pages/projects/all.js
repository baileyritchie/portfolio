import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import {getSortedProjectsData} from '../../lib/projects'
import Link from 'next/link'
import Date from '../../components/date'


export default function All({ allProjectsData }) {
  return (
  <>
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}> All Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title, image }) => (
            <li className={utilStyles.listItem} key={id}>
              <iframe src={image} ></iframe>
              <br/>
              <Link href="/projects/[id]" as={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  </>
  ) 
}
export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData

    }
  }
}