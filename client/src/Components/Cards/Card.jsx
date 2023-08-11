/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

export default function Card({ id, continents, name, flags }) {
    return (
        <div>
            <Link key={id} to={`/detail/${id}`}><h2>{name}</h2><h3>{continents}</h3>
                <img src={flags} alt={name} /></Link>
        </div>
    )
}