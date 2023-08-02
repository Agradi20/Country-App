require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT,
} = process.env;




const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/countries`, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

console.log(DB_HOST, DB_PASSWORD, DB_USER);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);



// UserCountry(sequelize);
// UserActivity(sequelize);

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
console.log(sequelize.models);
// Product.hasMany(Reviews);
Country.belongsToMany(Activity, { through: "user_activity" });
Activity.belongsToMany(Country, { through: "user_activity" });

module.exports = {
  Country,
  Activity, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};