const fs=require('fs');
const model=require('./model');
model.sync();
var Staff=model.Staff;

fs.readFile('data.json',(err,data)=>{
    var staff=JSON.parse(data.toString());
    for(let i of staff){
        console.log({
            name:i.name,
            sex:i.sex,
            camp:i.camp,
            type:i.type,
            level:i.level
        });
        (async ()=>{
            try{
                await Staff.create({
                    name:i.name,
                    sex:i.sex,
                    camp:i.camp,
                    type:i.type,
                    level:i.level
                });
            }catch(e){
                console.log(e);
            }
        })();
    }
});




