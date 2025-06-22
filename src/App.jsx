import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBarComponent from './components/AppBarComponent'
import ConfigureLinks from './Configuration/ConfigureLinks'

function App() {


  return (
    <>
      <AppBarComponent />
      <ConfigureLinks />
    </>
  )
}

export default App
