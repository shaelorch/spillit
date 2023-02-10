import Head from 'next/head'
import Image from 'next/image'
import HeroCont from '../components/HeroCont'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import SubButton from '../components/SubButton'
import RevCard from '../components/reviewCard'
import Header from '../components/Header'
import TopBar from '../components/topBAr'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

     <TopBar/>

      <main className={styles.main}>
        <HeroCont/>
        <Button/>
        <Header />
        <SubButton bttntxt='see more...'/>
        <RevCard/>
        
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
