const {Activity, Country} = require("../db");

const postActivity = async (req, res) => {
    const {name, difficulty, season, id} = req.body
    try {
        if(!name || !difficulty || !season || !id) throw Error("Faltan datos")
        const respuesta = await Activity.create({ name, difficulty, season });
        await respuesta.setCountries(id);
        const actividadCreada = await Activity.findOne({where: {id: respuesta.id}, include: {model: Country}});

        return res.status(200).json({message: "Actividad creada correctamente", actividadCreada});
    } catch (error) {
        return res.status(404).send({error: error.message});
    }
}

module.exports = postActivity;