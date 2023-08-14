// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LandingPage } from './Components/Landing/LandingPage'
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail"
import Form from './Components/Form/Form';
import NavBar from './Components/NavBar/NavBar';
import style from "./App.css"

function App() {


  const location = useLocation();


  return (
    <div className={style.contenido}>
      {location.pathname !== '/' && !location.pathname.startsWith('/detail/') && <NavBar/>}
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Form />}></Route>
      </Routes>
    </div>
  )
}

export default App
