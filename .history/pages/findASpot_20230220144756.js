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
import { useEffect, useState } from 'react'
import react from 'react';
import Pagnation from '../components/Pagnation'



export default function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

 useEffect(() => {
  setData(reviews);

 })

 function handleClick() {

 }

 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

     <TopBar/>

      <main className={styles.main}>
       <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:"100%" }}>
        {
         data &&
          currentPosts.map( (rev, index) => {
            return (
              <RevCard 
              key={index}
              name={rev.name}
              rating={`${rev.rating} stars`}
              review={`"${rev.review}"`}></RevCard>
            )
            })
         
        }
        <SubButton bttntxt='See More...' func={handleClick} />

        
        <div style={{width:'100%'}}>
          <Pagnation postsPerPage={postsPerPage} totalPosts={reviews.length} />

        </div>
  
      
        </div>
       
      </main>

      
    </div>
  )
}
