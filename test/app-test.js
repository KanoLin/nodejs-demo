const
    request = require('supertest'),
    app = require('../app'),
    assert=require('assert');
    should=require('should');


describe('#test koa app', () => {

    let server = app.listen(9900);

    describe('#test server', () => {

        it('#test get /staff', async() => {
            let res=request(server)
                .get('/staff?name=阿米娅')
                .expect(200,{
                    info_list:[{
                        id:54,
                        name:"阿米娅",
                        sex:"女",
                        camp:"罗德岛",
                        type:"术师",
                        level:5
                    }],
                    err_code:0,
                    err_msg:''
                });
                
        });

        it('#test post /insert 阿米娅2', done => {
            request(server)
                .post('/insert')
                .send({
                    name:'阿米娅2',
                    sex:'女',
                    camp:'黑钢',
                    type:'术士',
                    level:5
                })
                .end((err,res)=>{
                    should.not.exists(err);
                    res.text.should.containEql('{"err_code":0,"err_msg":""}');
                    done();
                });
        });

        it('#test post /update 阿米娅2', done => {
            request(server)
                .post('/update')
                .send({
                    match:{
                        name:'阿米娅2'
                    },
                    update:{
                        level:6
                    }
                })
                .end((err,res)=>{
                    should.not.exists(err);
                    res.text.should.containEql('{"rows":1,"err_code":0,"err_msg":""}');
                    done();
                });
        });

        it('#test post /delete 阿米娅2', done => {
            request(server)
                .post('/delete')
                .send({
                    match:{
                        name:'阿米娅2'
                    },
                })
                .end((err,res)=>{
                    should.not.exists(err);
                    res.text.should.containEql('{"rows":1,"err_code":0,"err_msg":""}');
                    done();
                });
        });
    });
});