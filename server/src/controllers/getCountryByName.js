const {Country} = require("../db")
const { Op } = require("sequelize");

const getCountryByName = async (req, res) => {
    const { name } = req.query

    try {
        const countries = await Country.findAll({where: { name: { [Op.iLike]: `%${name}%`}}})
        if(countries.length === 0) throw Error("No se encontraron paises")
        return res.status(200).json(countries)
    } catch (error) {
        return res.status(400).send({error: error.message})
    }
}

module.exports = getCountryByName;