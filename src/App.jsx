import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
