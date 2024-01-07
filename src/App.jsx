import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Com/Content'
import Landing from './Com/Landing'
import { Routes, Route, useLocation } from "react-router-dom";
function App() {

  const location = useLocation()
  const home = location.pathname === '/'
  return (
    <>
 
       <Routes>
       
        <Route path="/content" element={<Content />} />
        </Routes>
        {home &&    <Landing />}
    </>
  )
}

export default App
