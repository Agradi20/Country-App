/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../../Redux/actions';


const Detail = () => {
  const detail = useSelector((state) => state.detail);
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountry(id));
  }, [id, dispatch]);

  return (
    <div>
      <h3>{detail.name && detail.name}</h3>
      <img src={detail.flags} alt={detail.name} />
      <h3>Capital: {detail?.capital && detail.capital}</h3>
      <h3>Continent: {detail.continents && detail.continents}</h3>
      <h3>Subregion: {detail?.subregion && detail.subregion}</h3>
      <h3>Population: {detail.population && detail.population}</h3>
      <h3>Area: {detail?.area && detail.area} km²</h3>
      <Link to={"/home"}><button>Back</button></Link>
    </div>
  );
};

export default Detail;

