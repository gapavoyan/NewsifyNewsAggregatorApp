import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'
import store from "./store"

import { Provider } from 'react-redux'
function App() {
  return (
    <div>
      <Provider store={store}>
      <Header/>
      <Home />
      <Footer />
      </Provider>
    </div>
  )
}

export default App
