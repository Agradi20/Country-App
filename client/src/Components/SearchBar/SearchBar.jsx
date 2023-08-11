import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch } from "react-redux";
import { filterByName, getCountries } from "../../Redux/actions";

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
        }
    }

    const handleInput = (event) => {
        if (event.target.value === "") {
            setSearch("");
            dispatch(getCountries());
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search a Country..."
                value={search}
                onChange={handleSearch}
                onInput={handleInput}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar