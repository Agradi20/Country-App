const { Country, Activity } = require("../db")

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

module.exports = getCountryById;
