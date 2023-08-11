const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
            allowNull: false
        }
    });
};