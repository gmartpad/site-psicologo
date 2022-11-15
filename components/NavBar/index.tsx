import Image from 'next/image'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <span>
        <Image
          src='/favicon.ico'
          alt='logo do site que é um cerebro cartunizado'
          width={100}
          height={100}
        />
      </span>

      <ul className={styles.navBarList}>
        <li className={styles.navBarListItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.navBarListItem}>
          <Link href="/sobre">SOBRE</Link>
        </li>
        <li className={styles.navBarListItem}>
          <Link href="/especialidades">ESPECIALIDADES</Link>
        </li>
        <li className={styles.navBarListItem}>
          <Link href="/curso">CURSO</Link>
        </li>
        <li className={styles.navBarListItem}>
          <Link href="/materiais">MATERIAIS</Link>
        </li>
        <li className={styles.navBarListItem}>
          <Link href="/blog">BLOG</Link>
        </li>
      </ul>
    </nav>
  )
}