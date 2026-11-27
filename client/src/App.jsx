import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from './pages/register'
import Wdashboard from './worker/workerdashboard'
import Workerlayout from './worker/workerlayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/worker" element={<Workerlayout/>} />
          <Route path="/worker/dashboard" element={<Wdashboard />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
