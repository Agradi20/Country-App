const {Country, Activity} = require("../../db")
const { Op } = require("sequelize");


 const getCountry = async (req, res) => {
    try {
      const countries = await Country.findAll({include: {model: Activity}});
      res.json(countries);
    } catch (error) {
      console.error('Error al obtener los países:', error);
      res.status(500).json({ error: 'Error al obtener los países' });
    }
  
};


 const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params;
        const country = await Country.findOne({ where: { id: idPais }, include: {model: Activity} });

        if (country) {
            res.status(200).json(country);
        } else {
            res.status(404).json({ message: "Country not found" });
        }
    } catch (error) {
        console.error("Error al buscar país por ID:", error);
        res.status(500).json({ error: error.message });
    }
};


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

module.exports = {
    getCountry,
    getCountryById,
    getCountryByName
}