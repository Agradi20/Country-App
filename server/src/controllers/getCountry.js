const {Country} = require("../db")


const getCountry = async (req, res) => {
    try {
      const countries = await Country.findAll();
      res.json(countries); 
    } catch (error) {
      console.error('Error al obtener los países:', error);
      res.status(500).json({ error: 'Error al obtener los países' });
    }
  




    // try {
    //     const response = await axios.get("http://localhost:5000/countries");
    //     const countries = response.data;
    //     res.status(200).json(countries);
    // } catch (error) {
    //     res.status(500).json({ error: error.message })
    // }
};

module.exports = getCountry;