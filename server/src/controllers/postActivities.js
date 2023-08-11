const { Activity, Country } = require("../db");

const postActivity = async (req, res) => {
    const { name, difficulty, season, countries } = req.body
    try {
        if (!name || !difficulty || !season || !countries) throw Error("Faltan datos")
        const respuesta = await Activity.create({ name, difficulty, season });
        await respuesta.setCountries(countries);
        const actividadCreada = await Activity.findOne({
            where: { id: respuesta.id }, include: {
                model: Country, through: {
                    attribute: [],
                },
            }
        });

        return res.status(200).json({ message: "Actividad creada correctamente", actividadCreada });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}

module.exports = postActivity;