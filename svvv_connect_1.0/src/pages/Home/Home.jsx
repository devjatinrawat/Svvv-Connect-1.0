import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement,Categories,FeedBack,CTA,Footer } from '../../components'




function Home() {

  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <FeedBack/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Home;
