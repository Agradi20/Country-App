
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { getCountries, filterByContinent, filterByNameAsc, filterByNameDesc, fitlerByPopuAsc, filterByPopuDesc, filterByActivities } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
import style from "./Home.module.css"

const Home = () => {

  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  const handleNameOrder = (event) => {
    const order = event.target.value;
    if (order === "A") {
      dispatch(filterByNameAsc());
    } else if (order === "D") {
      dispatch(filterByNameDesc());
    }
  };

  const handlePopulationOrder = (event) => {
    const order = event.target.value;
    if (order === "PA") {
      dispatch(fitlerByPopuAsc());
    } else if (order === "PD") {
      dispatch(filterByPopuDesc());
    }
  };

  const handleContinentFilter = (event) => {
    const actualContinent = event.target.value;
    dispatch(filterByContinent(actualContinent))
  };

  const handleActivity = (event) => {
    const order = event.target.value;
    if (order === "PA") {
      dispatch(filterByActivities());
    } else if (order === "PS") {
      dispatch(getCountries())
    }
  };


  return (
    <div className={style.filtros}>
      <h1 className={style.tituloHome}>COUNTRIES</h1>
      <div className={style.boton1}>
        <Link to="/create"><button className={style.botonActivity}>Create an activity</button></Link>
      </div>
      <div className={style.Cadafiltro}>
      <h2>Order by Name </h2>
      <select className={style.boton} onChange={handleNameOrder}>
        <option value="-">--Select--</option>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      </div>
        <div className={style.Cadafiltro}>
          <h2>Order by Population</h2>
          <select onChange={handlePopulationOrder} className={style.boton}>
            <option value="-">--Select--</option>
            <option value="PA">Ascending</option>
            <option value="PD">Descending</option>
          </select>
        </div>
        <div className={style.Cadafiltro}>
          <h2>Sort by Continent</h2>
          <select onChange={handleContinentFilter} className={style.boton}>
            <option value="Todo">--Select--</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas"> Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className={style.Cadafiltro}>
          <h2>Sort by Activity</h2>
          <select onChange={handleActivity} className={style.boton}>
            <option value="PS">--Select--</option>
            <option value="PA">With Activity</option>
          </select>
        </div>
        <div className={style.cartas}>
        <Cards countries={countries}/>
        </div>
    </div>
  )
}

export default Home