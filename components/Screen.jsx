import styles from '@/styles/components/Screen.module.scss'

function Screen({ value }) {
  return <section className={styles.screen}>{value}</section>
}

export default Screen
