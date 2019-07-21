const
    request = require('supertest'),
    app = require('../app'),
    assert=require('assert');

describe('#test koa app', () => {

    let server = app.listen(9900);

    describe('#test server', () => {

        it('#test post /insert', async () => {
            let res = await request(server)
                .post('/insert')
                .send({name:'阿米娅',sex:'女',camp:'黑钢',type:'术士',level:'5'})
            assert.strictEqual(res.body,1);
                
        });

        
    });
});