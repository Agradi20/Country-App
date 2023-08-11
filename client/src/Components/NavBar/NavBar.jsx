// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button>Exit</button>
      </Link>
      <SearchBar/>
    </div>
  )
}

export default NavBar