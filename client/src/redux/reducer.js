/* eslint-disable no-case-declarations */
// eslint-disable-next-line no-unused-vars
import { GET_COUNTRIES, GET_COUNTRY, ORDER, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, FILTER_BY_NAME, GET_ACTIVITIES } from "../../src/Redux/actions";


const initialState = {
    countries: [],
    detail: {},
    baseCountries: [],
    activity: []
};



const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                baseCountries: action.payload,
            };

        case GET_COUNTRY:
            return {
                ...state,
                detail: action.payload,
            };

        case ORDER.NAME_ASC:
            return {
                ...state,
                countries: state.countries.slice().sort((a, b) => a.name.localeCompare(b.name)),
            };

        case ORDER.NAME_DESC:
            return {
                ...state,
                countries: state.countries.slice().sort((a, b) => b.name.localeCompare(a.name)),
            };

        case ORDER.POPULATION_ASC:
            return {
                ...state,
                countries: state.countries.slice().sort((a, b) => a.population - b.population),
            };

        case ORDER.POPULATION_DESC:
            return {
                ...state,
                countries: state.countries.slice().sort((a, b) => b.population - a.population),
            };

        case FILTER_BY_ACTIVITIES:
            const countriesActivities = state.countries.filter((country) => country.Activities && country.Activities.length > 0);

            return {
                ...state,
                countries: countriesActivities,
            };

        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: action.payload === "Todo" ? state.baseCountries : state.baseCountries.filter((country) => country.continents === action.payload)
            };

        case FILTER_BY_NAME:
            return {
                ...state,
                countries: [...action.payload]
            };

            case GET_ACTIVITIES:
                return {
                    ...state,
                    activity: action.payload
                }

        default:
            return {
                ...state,
            }
    }
};

export default reducer;