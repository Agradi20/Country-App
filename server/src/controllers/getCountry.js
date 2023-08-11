const {Country, Activity} = require("../db")


const getCountry = async (req, res) => {
    try {
      const countries = await Country.findAll({include: {model: Activity}});
      res.json(countries);
    } catch (error) {
      console.error('Error al obtener los países:', error);
      res.status(500).json({ error: 'Error al obtener los países' });
    }
  
};

module.exports = getCountry;