/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export const ORDER = {
    NAME_ASC: "NAME_ASC",
    NAME_DESC: "NAME_DESC",
    POPULATION_DESC: "POPULATION_DESC",
    POPULATION_ASC: "POPULATION_ASC",
    ACTIVITY_DESC: "ACTIVITY_DESC",
    ACTIVITY_ASC: "ACTIVITY_ASC"
};

export const getCountries = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/countries");
        const countries = response.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
        console.log(error);
    }
};

export const getCountry = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        const country = response.data;
        dispatch({ type: GET_COUNTRY, payload: country });
    };
};

export const filterByNameAsc = () => {
    return {
        type: ORDER.NAME_ASC,
    };
};

export const filterByNameDesc = () => {
    return {
        type: ORDER.NAME_DESC
    };
};

export const fitlerByPopuAsc = () => {
    return {
        type: ORDER.POPULATION_ASC
    };
};

export const filterByPopuDesc = () => {
    return {
        type: ORDER.POPULATION_DESC
    };
};

export const filterByActivities = (payload) => {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload,
    };
    
};

export const filterByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    };
};

export const filterByName = (name) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
        const country = response.data;
        console.log(response.data)
        dispatch({ type: FILTER_BY_NAME, payload: country });
    };
};

export const postActivity = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:3001/countries/activities', formData);
        if (response.data.hasOwnProperty('id')) {
          window.alert("Actividad creada");
        }
      } catch (error) {
        window.alert("Ocurrió un error");
      }
    };
  };

  export const getActivities = () => {
    return async (disp) => {
      try {
        const {data} = await axios("http://localhost:3001/activities")
        return disp({
          type:"GET_ACTIVITIES",
          payload: data,
        })
      } catch (err) {
        console.log(err)
      }
    }
  }