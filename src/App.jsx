import { useState , useEffect } from 'react'
import { auth } from './Firebase'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Com/Content'
import Landing from './Com/Landing'
import Model from "./Com/Model"
import Sign from "./Com/Sign"
import SignUp from "./Com/SignUp"
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
const [user,setuser] = useState(null)
  const location = useLocation()
  const home = location.pathname === '/'
   useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((user) => {
       if (user && user.email) {
         setuser(user.email)
       } else {
         setuser("")
       }
     })

     return () => unsubscribe()
   }, [])
  return (
    <>
      <Routes>
        <Route path="/Content" element={<Content Model={Model}  user={user} setuser={setuser}/>} />
        <Route path="/Sign" element={<Sign user={user}  setuser={setuser}/>} />
        <Route path="/SignUp" element={<SignUp setuser={setuser} user={user} />} />
      </Routes>
      {home && <Landing />}
    </>
  )
}

export default App
