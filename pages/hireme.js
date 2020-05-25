import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/form.module.css'

export default function HireMe() {
  return(
    <>
      <Layout>
        <div className={utilStyles.container}>
          <h2 className={utilStyles.iscentered}>Contact Me</h2>
          <form action="https://formspree.io/xbjzdeel" method="POST" className={formStyles.form}>
              <label>
                <input type="text" name="_replyto" className={formStyles.input} placeholder= "Your Email"/>
              </label>
              <label>
                <textarea name="message" className={formStyles.textarea} placeholder= "Write your message here..."/>
              </label> 
              <button type="submit" className ={formStyles.button}>Send</button>
          </form>
        </div>
      </Layout>
      
    </>



  )
}