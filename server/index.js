const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db.js");
const PORT = 3001;
// const { Country } = require("../server/src/db")

const paisesDB = async () => {
  try {
    const response = await axios.get("http://localhost:5000/countries")
    const data = response.data
    const paisesGuardados = data.map((pais) => {
      return {
        id: pais.cca3,
        name: pais.name.common,
        flags: pais.flags,
        continents: pais.continents,
        population: pais.population,
        capital: pais.capital,
        area: pais.area,
        subregion: pais.subregion
      }
    })
    const createdCountries = await Country.bulkCreate(paisesGuardados)
    console.log(createdCountries.length);
    console.log("paises guardados en la db")
  } catch (error) {
    console.error("error al guardar los paises:", error);
  }
}
conn.sync({ force: true }).then( async () => {
  await paisesDB();
  server.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error.message))

