const request = require('supertest');
const models = require('../../db/models');

const server = require('../../app.js');

beforeAll(async () => {
    // do something before anything else runs
    console.log('Jest starting!');
});

// close the server after each test
afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('GET /users', () => {
    test('get home route GET /', async () => {
    const response = await request(server).get('/api/users');

    expect(response.status).toEqual(200);

    const users = await models.User.findAll().then((data) => {
        return {success: data};
    })

    console.log(typeof users);
    console.log(typeof response.body);

    expect(response.type).toEqual("application/json");

    
    //expect(response.body).toEqual(users);

    //expect('Content-Type', /json/)
    //expect(response.text).toContain('Hello World!');
});
});