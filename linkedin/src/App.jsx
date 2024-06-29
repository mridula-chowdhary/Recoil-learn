// import { useState } from 'react'

import { RecoilRoot } from 'recoil'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <RecoilRoot>
      <Navbar/>
      </RecoilRoot>
    </>
  )
}

export default App
