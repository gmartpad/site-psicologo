import Head from 'next/head'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Home.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>

      <NavBar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog
        </h1>
      </main>
    </div>
  )
}
