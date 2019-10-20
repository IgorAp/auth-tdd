const request = require('supertest');

const app = require('../../src/app');
const factory = require('../utils/factories');
const truncate = require('../utils/truncate');

describe('Authentication',()=>{
    beforeEach(async () => {
        await truncate();
    });

    it('should authenticate with valid credentials', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .post('/sessions')
            .send({
                email:user.email,
                password:'123123'
            });
        expect(response.status).toBe(200);
    });
    it('shound return 401 for invalid credentials', async () => {
        const user = await factory.create('User',{
            password:'invalid'
        });
        const response = await request(app)
            .post('/sessions')
            .send({
                email:user.email,
                password:'321321'
            });
        expect(response.status).toBe(401);
    });
    it('shound return jwt token when authenticated', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .post('/sessions')
            .send({
                email:user.email,
                password:'123123'
            });
        expect(response.body).toHaveProperty('token');
    });
});