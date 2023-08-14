// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import style from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">
        <button className={style.boton}>Exit</button>
      </Link>
      <SearchBar/>
    </div>
  )
}

export default NavBar