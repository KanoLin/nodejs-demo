const Staff=require('../Models/Staff');

var doctorController={
    insert:async (ctx,next)=>{
        var res={};
        try{
            // console.log('*****');
            // console.log(ctx.request.body);
            await Staff.create(ctx.request.body);
            res={
                err_code:0,
                err_msg:''
            }
        }catch(e){
            res={
                err_code:1,
                err_msg:'插入失败'
            }
            console.log(e);
        }
        ctx.response.body=JSON.stringify(res);
    },
    delete:async (ctx,next)=>{
        var res={};
        try{
            var staffs=await Staff.findAll({
                    where:ctx.request.body.match
                });
            let rows=0;
            for (let p of staffs){
                await p.destroy();
                rows++;
            }
            res={
                rows:rows,
                err_code:0,
                err_msg:''
            }
        }catch(e){
            res={
                err_code:1,
                err_msg:'删除失败'
            }
            // console.log(e);
        }
        ctx.response.body=JSON.stringify(res);
    },
    update:async (ctx,next)=>{
        var res={};
        try{
            var staffs=await Staff.findAll({
                    where:ctx.request.body.match
                });
            let rows=0;
            let up=ctx.request.body.update;
            for (let p of staffs){
                for (let key in up){
                    p[key]=up[key];
                }
                await p.save();
                rows++;
            }
            res={
                rows:rows,
                err_code:0,
                err_msg:''
            }
        }catch(e){
            res={
                err_code:1,
                err_msg:'更新失败'
            }
            console.log(e);
        }
        ctx.response.body=JSON.stringify(res);
    },
}

module.exports=doctorController;