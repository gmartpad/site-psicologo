import Head from 'next/head'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Home.module.css'

export default function Curso() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curso</title>
      </Head>

      <NavBar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Curso
        </h1>
      </main>
    </div>
  )
}
