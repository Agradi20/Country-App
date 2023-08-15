import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch } from "react-redux";
import { filterByName, getCountries } from "../../Redux/actions";
import style from "./SearchBar.module.css"

const SearchBar = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(filterByName(search));

        if (search.length === 0) {
            dispatch(getCountries());
            window.alert("Please write a name of a Country")
        }
    }

    const handleInput = (event) => {
        if (event.target.value === "") {
            setSearch("");
            dispatch(getCountries());
        }
    }



    return (
        <form className={style.searchBar} onSubmit={handleSubmit}>
            <input
                className={style.input}
                placeholder="Search a Country..."
                value={search}
                onChange={handleSearch}
                onInput={handleInput}
            />
            <button type="submit" className={style.boton}>Search</button>
        </form>
    )
}

export default SearchBar