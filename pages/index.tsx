import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> PedroTech Next Tutorial</title>
      </Head>
      <Link href='/about'>About</Link>
      <h1 className={styles.homePageTitle}>Hello world</h1>
    </div>
  )
}
