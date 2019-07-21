const Staff=require('../Models/Staff');

var staffController={
    search:async (ctx,next)=>{
        var res={};
        try{
            var info=await Staff.findAll({
                where:ctx.query
            });
            res={
                info_list:info,
                err_code:0,
                err_msg:''
            }
        }catch(e){
            res={
                err_code:1,
                err_msg:'查询失败'
            }
            // console.log(e);
        }
        ctx.response.body=JSON.stringify(res);
    },
}

module.exports=staffController;