import React from 'react'

import Hero from '../components/Hero/Hero'
import Companies from '../components/Companies/Companies'
import Residencies from '../components/Residencies/Residencies'
import Value from '../components/Value/Value'
import Contact from '../components/Contact/Contact'
import GetStarted from '../components/GetStarted/GetStarted'
import TestMenu from '../components/TestComp/TextComp'


const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <TestMenu/>
      
    </div>
  )
}

export default Website