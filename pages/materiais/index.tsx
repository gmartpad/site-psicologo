import Head from 'next/head'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Home.module.css'

export default function Materiais() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Materiais</title>
      </Head>

      <NavBar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Materiais
        </h1>
      </main>
    </div>
  )
}
