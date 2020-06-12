import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import {getSortedProjectsData} from '../lib/projects'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData,allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hi, I'm Bailey! 👋 </p>
        <p> I'm a full stack software developer passionate about all things web. </p>
        <p> I'm currently seeking a full stack developer position or remote freelance work.</p>
      </section>
      <section className={`${utilStyles.iscentered}`}>
        <Link href="/now" >
                <a> <strike>About</strike> Now </a>
        </Link>
        <p className={utilStyles.makewhite}>--</p>
        <p>|</p>
        <p className={utilStyles.makewhite}>--</p>
        <Link href="/hireme" >
                <a>Hire Me</a>
        </Link>
        <p className={utilStyles.makewhite}>--</p>
        <p>|</p>
        <p className={utilStyles.makewhite}>--</p>
        <Link href="https://drive.google.com/file/d/11A5h2bRdxggYDV0mqRSqu-CcZXPQaqnv/view?usp=sharing" >
                <a> Resume </a> 
        </Link>
        <p className={utilStyles.makewhite}>--</p>
        <p>|</p>
        <p className={utilStyles.makewhite}>--</p>
        <Link href="https://github.com/baileyritchie" >
                <a> My Github </a> 
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
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
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allPostsData,
      allProjectsData

    }
  }
}
