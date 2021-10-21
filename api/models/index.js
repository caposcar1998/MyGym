'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
let counter = 0
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    if (counter == 0 ) {
      const model = require(path.join(__dirname, "Usuarios.js"))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
      counter = counter + 1
    } else if (counter == 1  ) {
        const model = require(path.join(__dirname, "Ejercicios.js"))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
        counter = counter + 1
    } else if (counter == 2){
        const model = require(path.join(__dirname, "Rutinas.js"))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
        counter = counter + 1
    } else if( counter ==3){
      const model = require(path.join(__dirname, "EjerciciosRutinas.js"))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
      counter = counter +1
    } else if( counter == 4){
      const model = require(path.join(__dirname, "EvaluacionRutinas.js"))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }


  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
