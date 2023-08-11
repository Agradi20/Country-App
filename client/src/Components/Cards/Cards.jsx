/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const Cards = () => {
    const countries = useSelector(state => state.countries);
    const countriesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
  
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountries = countries.slice(firstCountry, lastCountry);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            {countries.length === 0 ? (
                <h3>Country not found</h3>
            ) : (
                <>
                <div>
                {currentCountries.map(country => (
              <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flags={country.flags}
                continents={country.continents}
              />
            ))}
                </div>
                <div>
                    {currentPage > 1 && (
                        <button onClick={previousPage}>Prev</button>
                    )}
                    {countries.length > lastCountry && (
                        <button onClick={nextPage}>Next</button>
                    )}
                </div>
                </>
            )}
        </div>
    );
};

export default Cards