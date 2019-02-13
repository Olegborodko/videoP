const request = require('supertest');
const models = require('../../db/models');

const server = require('../../app.js');

beforeAll(async () => {
    // do something before anything else runs
    console.log('Jest starting!');

    models.User.destroy({
        where: {},
        truncate: true
    });
});

// close the server after each test
afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('POST /users', () => {
    test('success', async () => {

    const response = await request(server).post('/api/users').send(
        { login: 'john12', email: '1@1.com', password: 'ddd111' }
    );

    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.success.login).toEqual('john12');
    expect(response.cookies).toEqual('name3');
    //expect(response.universalCookies).toEqual('name3');


    });
});

describe('POST /users', () => {
    test('errors', async () => {

    const response = await request(server).post('/api/users').send(
        { login: 'john12', email: '1@1.com', password: 'ddd111' }
    );

    expect(response.status).toEqual(400);
    expect(response.type).toEqual("application/json");
    expect(response.body.errors).toBeTruthy();

    });
});

describe('GET /users', () => {
    test('success', async () => {
    const response = await request(server).get('/api/users');

    expect(response.status).toEqual(200);

    // const users = await models.User.findAll().then((data) => {
    //     return {success: data};
    // });

    //console.log(typeof users);
    //console.log(response.body);

    expect(response.type).toEqual("application/json");
    expect(typeof response.body).toBe('object');
    expect(response.body.success.length).toBe(1);

    //expect(response.text).toContain('Hello World!');
    });
});