const {Sequelize} = require('sequelize');



const sequelize = new Sequelize('neondb', 'sanjeev.dasgupta', '6jNiyWEKxoA1', {
    dialect: 'postgres',
    dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
},
    host: 'ep-solitary-meadow-593229.ap-southeast-1.aws.neon.tech'
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
