import React from 'react'
import './App.css'
import { Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Features, WhatisGPT3, Header } from './containers'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <div>
            <Brand/>
            <WhatisGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    </div>
  )
}

export default App