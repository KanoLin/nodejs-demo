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
    },
    logging:false,
    timezone:'+08:00'
});

var exports={};

exports.sequelize = sequelize;

exports.defineModel = function (name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    attrs.version = {
        type: Sequelize.BIGINT,
    };
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: true,
        paranoid: true, 
        charset: 'utf8mb4', 
        collate: 'utf8mb4_general_ci',
        hooks: {
            beforeValidate: function(obj){
                if(obj.isNewRecord){
                    obj.version = 0 ;
                }else{
                    obj.version++ ;
                }
            }
        }
    });
};

module.exports=exports;