"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Schedules", "mediaName", {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Schedules", "mediaName");
    }
};
