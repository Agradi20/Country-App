const { Activity } = require("../db");

const getActivity = async (req, res) => {
    try {
      const activities = await Activity.findAll();
      res.status(200).send(activities);
    } catch (error) {
      res.status(400).json({ error: 'Error al obtener las actividades' });
    }
};

module.exports = getActivity;