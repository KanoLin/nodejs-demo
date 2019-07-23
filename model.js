const fs=require('fs');
const db=require('./db');

var model_path=__dirname + '/Models';
var files = fs.readdirSync(__dirname + '/Models');
var js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);

module.exports = {};

for (var f of js_files) {
    var name = f.substring(0, f.length - 3);
    module.exports[name] = require(model_path + '/' + f);
}

module.exports.sync=()=>{
    db.sequelize.sync();
};