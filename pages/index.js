import Head from 'next/head'
import Image from 'next/image'
import ResponsiveAppBar from './_navbar'
import { Button } from '@mui/material'
import { Paper } from '@mui/material'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NewU Info Hub</title>
        <meta name="description" content="Created by New U Graphics Design" />
        <link rel="icon" href="/favicon.ico"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <ResponsiveAppBar/>

      <main className={styles.main}>
          <Image src="/FullLogo.jpg" alt="New U Full Logo" width={390} height={300} />
          <h1> New University Information Hub</h1>
          <div className={styles.btngroup}>
            <Button variant="outlined" className={styles.btn}>
            Apply to New U
            </Button>
            <Button variant="outlined" className={styles.btn}>
            Admitted New U Members
            </Button>
            <Button variant="outlined" className={styles.btn}>
            New U Galleries
            </Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.newuniversity.org"
          target="_blank"
          rel="linked to newspaper official website"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/whitelogo.jpg" alt="New University Logo" width={200} height={150} />
          </span>
        </a>
      </footer>
    </div>
  )
}
