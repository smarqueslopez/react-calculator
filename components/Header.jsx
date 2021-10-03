import ThemeChanger from './ThemeChanger'
import styles from '@/styles/components/Header.module.scss'

function Header() {
  return (
    <section className={styles.header}>
      <h1 className={styles.header__title}>calc</h1>
      <ThemeChanger />
    </section>
  )
}

export default Header
