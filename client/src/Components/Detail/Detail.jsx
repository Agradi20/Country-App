/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, getActivities } from '../../Redux/actions';
import style from "./Detail.module.css"


const Detail = () => {
  const detail = useSelector((state) => state.detail);
  const [filtro, setFiltro] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch()


  useEffect(() => {
    if(detail.Activities) {
      setFiltro(detail.Activities);
    }
    dispatch(getCountry(id));
    dispatch(getActivities())
  }, []);


  return (
    <div>
      <h2 className={style.Titulo}>Detail of the country</h2>
      <div className={style.Detail}>
        <div>
        <h3>{detail.name && detail.name}</h3>
      <img src={detail.flags} alt={detail.name} className={style.bandera} />
      <h3>Capital: {detail?.capital && detail.capital}</h3>
      <h3>Continent: {detail.continents && detail.continents}</h3>
      <h3>Subregion: {detail?.subregion && detail.subregion}</h3>
      <h3>Population: {detail.population && detail.population}</h3>
      <h3>Area: {detail?.area && detail.area} km²</h3>
      </div>
      <Link to={"/home"}><button className={style.boton}>Back</button></Link>
      </div>
      <h2 className={style.Titulo}>Activities</h2>
      <div className={style.actividad}>
      {filtro.map((actividad) => (
        <div key={actividad.id} className={style.CadaActividad}>
          <h4>Name of the activity: {actividad.name}</h4>
          <h4>Season: {actividad.season}</h4>
          <h4>Difficulty: {actividad.difficulty}</h4>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Detail;

