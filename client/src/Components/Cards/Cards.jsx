/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card'

const Cards = ({data}) => {
  return <div>
    {
        data.map((pais) => {
            return <Card
            key = {pais.id}
            name = {pais.name}
            flags = {pais.flags}
            continents = {pais.continents}
            />
        })
    }
  </div>
}


export default Cards