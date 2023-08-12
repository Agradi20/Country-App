/* eslint-disable no-unused-vars */
import React from 'react'

const Validation = (form) => {
    let error = {};

    if(!form.countries){
        error.countries= "⚠️Select at least one country⚠️"
    }
    if(!form.name){
        error.name='Please write an activity'
    }
    if(form.name.length<2 || form.name.length>25){
        error.name= "⚠️Write an activity that is at least 2 characters long and 25 characters max⚠️."
    }
    if(!form.dificulty){
        error.dificulty="⚠️Select a difficulty⚠️"
    }
    if(!form.season){
        error.season= "⚠️Select a season⚠️"
    }
    if(!form.season && !form.dificulty && form.name.length<2 && form.name.length>25 && !form.name && !form.countries){
        error.boton = "Form incomplete⚠️"
    }
    return error;
}

export default Validation