const fs=require('fs');

function addControllers(controllers,dir){
    fs.readdirSync(__dirname+'/'+dir).filter((f)=>{
        return f.endsWith('.js');
    }).forEach((f)=>{
        let controller=require(__dirname+'/'+dir+'/'+f);
        controllers[f.split('.')[0]]=controller;
    });
};

module.exports=(dir)=>{
    let controllers_dir= dir||'Controllers';
    let controllers={};
    addControllers(controllers,controllers_dir);
    function controller(cstr){
        let set_name=cstr.split('@')[0];
        let fn_name=cstr.split('@')[1];
        return controllers[set_name][fn_name];
    }
    return controller;
};