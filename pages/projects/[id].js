import Layout from '../../components/layout'
import { getAllProjectsIds, getProjectData } from '../../lib/projects'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </div>
        View 
        <a href={projectData.github}> Github </a> or
        <a href={projectData.website}> Website</a>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        <iframe src={projectData.image} width="640" height="480"></iframe>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}