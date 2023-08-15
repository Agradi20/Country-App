/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import style from "./Cards.module.css"

const Cards = () => {
    const countries = useSelector(state => state.countries);
    const countriesPerPage = 10;
    const totalPages = Math.ceil(countries.length / countriesPerPage)

    const [currentPage, setCurrentPage] = useState(1);
  
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountries = countries.slice(firstCountry, lastCountry);

    const nextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const previousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
        }
      };
    
      const getPageButtons = () => {
        const pageButtons = [];
    
        if (totalPages <= 7) {
          // Show all page buttons if total pages are 7 or fewer
          for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={currentPage === i ? style.activePage : ""}
              >
                {i}
              </button>
            );
          }
        } else {
          // Show limited page buttons with ellipsis
          if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
              pageButtons.push(
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={currentPage === i ? style.activePage : ""}
                >
                  {i}
                </button>
              );
            }
            pageButtons.push(<span key="ellipsis-start">...</span>);
            pageButtons.push(
              <button key={totalPages} onClick={() => goToPage(totalPages)}>
                {totalPages}
              </button>
            );
          } else if (currentPage > totalPages - 4) {
            pageButtons.push(
              <button key={1} onClick={() => goToPage(1)}>
                1
              </button>
            );
            pageButtons.push(<span key="ellipsis-end">...</span>);
            for (let i = totalPages - 4; i <= totalPages; i++) {
              pageButtons.push(
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={currentPage === i ? style.activePage : ""}
                >
                  {i}
                </button>
              );
            }
          } else {
            pageButtons.push(
              <button key={1} onClick={() => goToPage(1)}>
                1
              </button>
            );
            pageButtons.push(<span key="ellipsis-start">...</span>);
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
              pageButtons.push(
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={currentPage === i ? style.activePage : ""}
                >
                  {i}
                </button>
              );
            }
            pageButtons.push(<span key="ellipsis-end">...</span>);
            pageButtons.push(
              <button key={totalPages} onClick={() => goToPage(totalPages)}>
                {totalPages}
              </button>
            );
          }
        }
    
        return pageButtons;
            
        }
    

    return (
        <div className={style.contenido}>
          {countries.length === 0 ? (
            <h3>Country not found</h3>
          ) : (
            <>
              <div className={style.cartas}>
                {currentCountries.map((country) => (
                  <Card
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continents={country.continents}
                  />
                ))}
              </div>
    
              <div className={style.paginado}>
                {currentPage > 1 && (
                  <button onClick={previousPage} className={style.botonPrev}>Prev</button>
                )}

                {getPageButtons()}
    
                {currentPage < totalPages && (
                  <button onClick={nextPage} className={style.botonNext}>Next</button>
                )}
              </div>
            </>
          )}
        </div>
      );
};

export default Cards