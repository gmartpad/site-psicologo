import Head from 'next/head'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Home.module.css'

export default function Especialidades() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Especialidades</title>
      </Head>

      <NavBar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Especialidades
        </h1>
      </main>
    </div>
  )
}
