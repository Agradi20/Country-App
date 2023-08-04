// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import './App.css'
import axios from "axios"
import { Route, Routes, useLocation } from 'react-router-dom'
import { LandingPage } from './Components/Landing/LandingPage'
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards"

const {data} = await axios("http://localhost:3001/countries");
console.log(data);

 function App() {

  const location = useLocation()


  return (
    <div>
      {location.pathname !== "/" && (<NavBar />)}
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/casa' element={<Home />}></Route>
        <Route path='/home' element={<Cards data={data}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
