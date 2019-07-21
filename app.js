const Koa=require('koa');
const bodyParser=require('koa-bodyparser');
const routes=require('./routes');
const app=new Koa();

app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());
app.listen(3000);
console.log('app started at port 3000...');
module.exports=app;