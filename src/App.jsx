import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import LogIn from './components/auth/Login'
import SignUp from './components/auth/Register'


function App() {

  return (
    <>
     <div>
      <Navbar />
      

      <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<SignUp />} />
      
      </Routes>
     </div>
    </>
  )
}

export default App
