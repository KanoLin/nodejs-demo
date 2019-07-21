const Router=require('koa-router');
const ctr=require('./controller')();
let routes=new Router();

routes.get('/staff',ctr('staff@search'))
    .post('/insert',ctr('doctor@insert'))
    .post('/delete',ctr('doctor@delete'))
    .post('/update',ctr('doctor@update'));

module.exports=routes;

