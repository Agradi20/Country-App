/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import style from "./Card.module.css"

export default function Card({ id, continents, name, flags }) {
    const nombreCortado = () => {
        if(name.length > 15) {
            const nombre = name.split("").splice(0, 15).join("")
            return <h2 className={style.nombre}>{nombre}...</h2>
        }
        return <h2 className={style.nombre}>{name}</h2>
    }
    return (
        <div className={style.carta2}>
            <Link key={id} to={`/detail/${id}`}>{nombreCortado()}
                <img className={style.banderas} src={flags} alt={name} /></Link>
                <h3 className={style.continente}>{continents}</h3>
        </div>
    )
}