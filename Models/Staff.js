const Sequelize=require('sequelize');
const sequelize=require('../db');

var Staff=sequelize.define('staff',{
    name:{
        type:Sequelize.STRING(10),
        unique:true,
    },
    sex:{
        type:Sequelize.STRING(4),
        defaultValue:`女`
    },
    camp:Sequelize.STRING(10),
    type:Sequelize.STRING(10),
    level:Sequelize.SMALLINT,
},{
    timestamps:false,
});

module.exports=Staff;
