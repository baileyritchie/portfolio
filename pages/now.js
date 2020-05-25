import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
export default function Now() {
  return (
  <>
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}><strike>About</strike> Now 📍</h2>
        <p> Instead of an "about" page, this "now" page will represent my current activites, interests and state.</p>
        <p> I believe it is a more meaningful way to see into my life and what I'm up to.</p>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <h3>Work 👩‍💻</h3>
            <p> Currently working on a few web development projects. </p>
          </li>
          <li className={utilStyles.listItem}> 
            <h3>Interests 📚</h3>
            <p> I've always been interested in alternative paths or ideas, at the moment I'm enjoying the
              <a href="/"> Indie Hackers </a> community. I've been reading books about changing habits and also
              watching content about e-commerce as well.
            </p>
          </li>
          <li> 
            <h3> Where am I? 🌍 </h3>
            <p> Presently located in Pittsburgh, Pennsylvania.</p>
          </li>



        </ul>
      </section>
    </Layout>
  </>
  ) 
}