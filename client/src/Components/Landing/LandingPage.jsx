// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"
import style from "./LandingPage.module.css"

export const LandingPage = () => {
    return (
        <div className={style.contenido}>
            <div>
            <h1>Country Browser</h1>
            <h3>All the Countries at only one click away!</h3>
            <h5>Visit all the Countries you want!</h5>
            <Link to="/home"><button className={style.boton}>Start the journey</button></Link>
            </div>
        </div>
    )
}