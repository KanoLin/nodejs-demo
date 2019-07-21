const Sequelize=require('sequelize');
const config=require('./config');
var sequelize=new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dialect: 'mysql',
    dialectOptions:{
        charset:'utf8mb4',
    },
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    define:{
        underscored:true,
        charset:'utf8mb4',
    }
});

module.exports=sequelize;