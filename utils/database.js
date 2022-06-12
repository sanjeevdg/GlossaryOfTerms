const {Sequelize} = require('sequelize');


/** REMOTE DEV ENV SETTINGSS
const sequelize = new Sequelize('da5oiqsej8qim4', 'iljcgrdmrrgiut', '291ed7ea6b334780be8df19d1e9ca9d9fcdf9297fcae043797c21158a65db3b3', {
    dialect: 'postgres',
    dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
},
    host: 'ec2-54-157-16-196.compute-1.amazonaws.com'
});
**/

const sequelize = new Sequelize('SpunkyFormsDb', 'root', 'sanjeev', {
    dialect: 'mysql',
    dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
},
    host: 'localhost',
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }   
});

//export default sequelize;
module.exports = sequelize;
