// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import style from "./NavBar.module.css"
import logo from "../../imagenes/logo.jpg"

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">
        <img src={logo} alt="logo" className={style.logo} />
      </Link>
      <SearchBar/>
      <div>
      <Link to="/home">
        <button className={style.botonHome}>Home</button>
      </Link>
      </div>
    </div>
  )
}

export default NavBar