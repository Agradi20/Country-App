/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, getActivities } from '../../Redux/actions';


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
  }, [id, dispatch, detail.Activities]);


  return (
    <div>
      <h3>{detail.name && detail.name}</h3>
      <img src={detail.flags} alt={detail.name} />
      <h3>Capital: {detail?.capital && detail.capital}</h3>
      <h3>Continent: {detail.continents && detail.continents}</h3>
      <h3>Subregion: {detail?.subregion && detail.subregion}</h3>
      <h3>Population: {detail.population && detail.population}</h3>
      <h3>Area: {detail?.area && detail.area} km²</h3>
      <h2>Activities you can do</h2>
      {filtro.map((actividad) => (
        <div key={actividad.id}>
          <h4>Name of the activity: {actividad.name}</h4>
          <h4>Season: {actividad.season}</h4>
          <h4>Difficulty: {actividad.difficulty}</h4>
        </div>
      ))}
      <Link to={"/home"}><button>Back</button></Link>
    </div>
  );
};

export default Detail;

