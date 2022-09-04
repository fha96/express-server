'use strict';

const server = require('../server.js');

const supertest = require('supertest');

//below initialization would do the fake runnig of my server in order to test it 
const request = supertest(server.app);


describe('Testing Express server ', () => {

    it('test home route',async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
    });
    it('test POST method', async () => {
        const response = await request.post('/person');
        expect(typeof response.body).toEqual('object');
});
});