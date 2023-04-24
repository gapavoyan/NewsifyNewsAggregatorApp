import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
