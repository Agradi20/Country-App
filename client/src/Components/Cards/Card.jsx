/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

export default function Card({name, flags, continents}) {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{continents}</h2>
            <img src={flags} alt={name} />
        </div>
    )
}