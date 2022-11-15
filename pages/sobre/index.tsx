import Head from 'next/head'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Home.module.css'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre mim</title>
      </Head>

      <NavBar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre mim
        </h1>
      </main>
    </div>
  )
}
