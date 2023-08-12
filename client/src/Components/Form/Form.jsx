/* eslint-disable no-unused-vars */
import React from 'react'
import { getCountries } from '../../Redux/actions'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Validation from './Validation'
import { postActivity } from '../../Redux/actions'
import {Link} from "react-router-dom"
import style from "./Form.module.css"

const Form = () => {

  const countryNames = useSelector(state => state.countries)
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [form, setForm] = useState({
    name:'',
    difficulty: '',
    season:'',
    countries:[],
  });
console.log("form", form)
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch])


  const handleSubmit = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({...form, [property]: value})
    setError(Validation({...form, [property]: value}, setForm))
  }


  const handlerCountry = (event) => {
    const selectedCountryId = event.target.value;

    setForm((prevForm) => {
          const countrySelected = prevForm.countries.includes(selectedCountryId);
    
          if(countrySelected) {
            return {
              ...prevForm,
              countries: prevForm.countries.filter((countries) => countries !== selectedCountryId),
            };
          } else {
            return {
              ...prevForm,
              countries: [...prevForm.countries, selectedCountryId],
            };
          }
        });
        setError(Validation({...form, countries: selectedCountryId}))
  }

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSend = (event) => {
    event.preventDefault();
    dispatch( postActivity(form));
    setShowSuccessAlert(true);
  };

  const resetForm = () => {
    setForm({
      name: '',
      difficulty: '',
      season: '',
      countries: [],
    });
    setError({});
    setOpen(false);
  };



  return (
    <>
    <Link to="/home"><button>Back</button></Link>
    <h1 className={style.Titulo}>Create your Activities</h1>
    <div className={style.Detail}>
      <form onSubmit={handleSend}>
        <div className={style.preguntaUno}>
        <p className={style.dato}>Select countries</p>
        <p className={form.countries.length > 0 ? style.paisesAgregados : style.sinPaises}>
        {form.countries.length > 0 ? form.countries.join(', ') : "Coutries added"}
        </p>
        <button className={style.boton} type="button" onClick={handleToggle}>Select countries</button>
        {open && (
          
            <div className={style.paises}>
              <div className={style.dropdownMenu}>
              <div className={style.scrollableMenu}>
                {countryNames.map((element, index) => (
                  <div className={style.formCheck} key={element.id}>
                    <input
                    type="checkbox"
                    onChange={handlerCountry}
                    name={element.name}
                    value={element.id}
                    className={style.checkbox}
                    />
                    <label htmlFor={element.name}>{element.name}</label>
                  </div>
                ))}
              </div>
              <br />
              {error.countries ? <span>{error.countries}</span> : ''}
            </div>
            </div>
        )}
        </div>

        <div className={style.pregunta2}>
          <p htmlFor="name" className={style.dato}>Name of the activity</p>
          <input
          type='text'
          name='name'
          placeholder='Write an activity'
          value={form.name}
          onChange={handleSubmit}
          className={style.place}
          required
          />
          <br />
          {error.name ? <span className={style.error}>{error.name}</span> : ''}
        </div>

        <div className={style.pregunta3}>
          <p htmlFor="difficulty" className={style.dato}>Activity Difficulty</p>
          <select
          name="difficulty"
          value={form.difficulty}
          onChange={handleSubmit}
          required
          >
            <option value="">Select a difficulty</option>
            <option value={1}>Very easy</option>
            <option value={2}>Easy</option>
            <option value={3}>Medium</option>
            <option value={4}>Hard</option>
            <option value={5}>Very hard</option>
            </select>
          <br />
          {error.difficulty ? <span className={style.error}>{error.difficulty}</span> : ''}
        </div>

        <div className={style.pregunta4}>
          <p htmlFor="season" className={style.dato}>Season:</p>
          <select
          name='season'
          value={form.season}
          onChange={handleSubmit}
          required
          >
            <option value="">Choose a season</option>
            <option value="Verano">Summer</option>
            <option value="Invierno">Winter</option>
            <option value="Primavera">Spring</option>
            <option value="Otoño">Autumn</option>
          </select>
          <br />
          {error.season ? <span className={style.error}>{error.season}</span> : ''}
        </div>
        {showSuccessAlert && (
        <div>
          <p className={style.exito}>Activity posted successfully!</p>
        </div>
      )}

      {showSuccessAlert && setTimeout(() => setShowSuccessAlert(false), 3500)}
        <div className={style.botonEnviar}>
          <button className={style.letra} type="submit" disabled={!form.name || !form.difficulty || !form.season || !form.countries || form.countries.length === 0}>Send</button>
          <button className={style.reset} type="button" onClick={resetForm}>Reset</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Form