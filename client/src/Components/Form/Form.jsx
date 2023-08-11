/* eslint-disable no-unused-vars */
import React from 'react'
import { getCountries } from '../../Redux/actions'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Validation from './Validation'
import { postActivity } from '../../Redux/actions'
import {Link} from "react-router-dom"

const Form = () => {

  const countryNames = useSelector(state => state.countries)
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState({});
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


  // const handleCheckBoxChange = (event) => {
  //   const { value } = event.target;

  //   setForm((prevForm) => {
  //     const countrySelected = prevForm.countries.includes(value);

  //     if(countrySelected) {
  //       return {
  //         ...prevForm,
  //         countries: prevForm.countries.filter((countries) => countries !== value),
  //       };
  //     } else {
  //       return {
  //         ...prevForm,
  //         countries: [...prevForm.countries, value],
  //       };
  //     }
  //   });
  //   setError(Validation({...form, countries: value}))
  // };

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

  const handleSend = async (event) => {
    event.preventDefault();
    dispatch(await postActivity(form));
  };



  return (
    <>
    <Link to="/home"><button>Back</button></Link>
    <h1>Create your Activities</h1>
    <div>
      <form onSubmit={handleSend}>
        <div>
        <p>Select countries</p>
        <p>{form.countries.length > 0 ? form.countries.join(', ') : "Countries added"}</p>
        <button type="button" onClick={handleToggle}>Select countries</button>
        {open && (
          <div>
            <div>
              <div>
                {countryNames.map((element, index) => (
                  <div key={element.id}>
                    <input
                    type="checkbox"
                    onChange={handlerCountry}
                    name={element.name}
                    value={element.id}
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

        <div>
          <p htmlFor="name">Name of the activity</p>
          <input
          type='text'
          name='name'
          placeholder='Write an activity'
          value={form.name}
          onChange={handleSubmit}
          required
          />
          <br />
          {error.name ? <span>{error.name}</span> : ''}
        </div>

        <div>
          <p htmlFor="difficulty">Activity Difficulty</p>
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
          {error.difficulty ? <span>{error.difficulty}</span> : ''}
        </div>

        <div>
          <p htmlFor="season">Season:</p>
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
          {error.season ? <span>{error.season}</span> : ''}
        </div>

        <div>
          <button type="submit" disabled={!form.name || !form.difficulty || !form.season || !form.countries || form.countries.length === 0}>Send</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Form