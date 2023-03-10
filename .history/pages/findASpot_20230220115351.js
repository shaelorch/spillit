import Head from 'next/head'
import Image from 'next/image'
import HeroCont from '../components/HeroCont'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import SubButton from '../components/SubButton'
import RevCard from '../components/reviewCard'
import Header from '../components/Header'
import TopBar from '../components/topBAr'
import reviews from '../data/reviews.json'
import { useState } from 'react'



export default function Home() {

  const [data, setData] = useState(false);

  const handleClickData = () => {
    setData(true);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

     <TopBar/>

      <main className={styles.main}>
       <div style={{display:'flex'}}>
        {
          reviews.map( (rev, index) => 
            index < 10 && (
              <RevCard 
              key={index}
              name={rev.name}
              rating={`${rev.rating} stars`}
              review={`"${rev.review}"`}></RevCard>
            )
          )
          
        }
        <SubButton bttntxt='see more...'/>
       </div>
       
        
       
      </main>

      
    </div>
  )
}
