const { Router } = require("express");
const getCountryById = require("../controllers/getCountryById");
const getCountry = require("../controllers/getCountry");
const getAllActivity = require("../controllers/getAllActivity");
const postActivity = require("../controllers/postActivities");
const getCountryByName = require("../controllers/getCountryByName")

const router = Router();

router.get("/countries/name", getCountryByName);
router.get("/countries/:idPais", getCountryById);
router.get("/countries", getCountry);
router.get("/activities", getAllActivity);
router.post("/countries/activities", postActivity);

module.exports = router;
