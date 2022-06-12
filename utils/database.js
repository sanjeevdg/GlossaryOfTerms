const {Sequelize} = require('sequelize');



const sequelize = new Sequelize('d2mf76t33039l4', 'lchvywrsfggpww', 'bd5eaf71e64a395837e00e7352b3057715b74d9133f0514ba79bbcec509acc26', {
    dialect: 'postgres',
    dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
},
    host: 'ec2-34-198-186-145.compute-1.amazonaws.com'
});

/** REMOTE DEV ENV SETTINGSS
Host
ec2-34-198-186-145.compute-1.amazonaws.com
Database
d2mf76t33039l4
User
lchvywrsfggpww
Port
5432
Password
bd5eaf71e64a395837e00e7352b3057715b74d9133f0514ba79bbcec509acc26


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
**/
//export default sequelize;
module.exports = sequelize;
