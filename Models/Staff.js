const Sequelize=require('sequelize');
const db=require('../db');

var Staff=db.defineModel('staff',{
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
});

module.exports=Staff;
