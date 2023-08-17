const { Router } = require("express");
// const getCountryById = require("../controllers/getCountryById");
// const getCountry = require("../controllers/getCountry");
// const getAllActivity = require("../controllers/getAllActivity");
// const postActivity = require("../controllers/postActivities");
// const getCountryByName = require("../controllers/getCountryByName")
const countryController = require("../controllers/Country-Controller/countryController");
const activityController = require("../controllers/Activity-Controller/activityController");

const router = Router();

router.get("/countries", countryController.getCountry);
router.get("/countries/name", countryController.getCountryByName);
router.get("/countries/:idPais", countryController.getCountryById);
router.post("/countries/activities", activityController.postActivity);
router.get("/activities", activityController.getActivity);

module.exports = router;
