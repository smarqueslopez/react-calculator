import styles from '@/styles/components/Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__attribution}>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href='https://github.com/smarqueslopez'
          target='_blank'
          rel='noreferrer'
        >
          smarqueslopez
        </a>
        .
      </div>
    </footer>
  )
}

export default Footer
