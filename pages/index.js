import Head from 'next/head'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import styles from '@/styles/components/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Calculator app</title>
        <meta name='description' content='Frontend Mentor | Calculator app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Calculator />
      <Footer />
    </div>
  )
}
