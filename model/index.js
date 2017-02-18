let Sequelize = require("sequelize");
let fs = require("fs");
let path = require("path");

let sequelize = new Sequelize(process.env.DB_APP_NAME, process.env.DB_APP_USER, process.env.DB_APP_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: process.env.DB_MAX_CONNECTION || 5,
        min: 0,
        idle: 10000
    }
});

let db = {};

fs.readdirSync(__dirname).filter(file => file !== "index.js")
    .forEach(file => {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
