// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"

export const LandingPage = () => {
    return (
        <div>
            <h1>Country Browser App</h1>
            <h3>Todos los Paises a la distancia de un Click</h3>
            <h5>Visita todos los que quieras!</h5>
            <Link to = "/home"><button>Ingrese Aca</button></Link>
        </div>
    )
}