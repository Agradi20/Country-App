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
      // si en la pagina en la que me encuentro es menor a el total de paginas significa que estoy en la primer pagina por lo tanto la pagina siguiente es la pagina en la que estoy mas 1
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const previousPage = () => {
        // Si el numero de la pagina es mayor a 1 que la pagina anterior sea la que estoy parado menos 1
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const goToPage = (pageNumber) => {
        // Si el numero de la pagina es mayor o igual a 1 y menor o igual a todas las paginas que me muestre la pagina determinada 
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
        }
      };
    
      const getPageButtons = () => {
        const pageButtons = [];
    
        if (totalPages <= 7) {
          // Mostrar todas las paginas sin el total de paginas es 7 o menor
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
          // Mostar limitadas paginas con ellipsis
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