import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/Headline'
import Food from './Components/Food'
import Category from './Components/Category'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />

    </>
  )
}

export default App
