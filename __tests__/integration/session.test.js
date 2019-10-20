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
                password:user.password
            });
        expect(response.status).toBe(200);
    });

    it('should return 401 for invalid email', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .post('/sessions')
            .send({
                email:'invalid@email.test',
                password:'invalid'
            });
        expect(response.status).toBe(401);
    });

    it('should return 401 for invalid password', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .post('/sessions')
            .send({
                email:user.email,
                password:'invalid'
            });
        expect(response.status).toBe(401);
    });
    
    it('should return jwt token when authenticated', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .post('/sessions')
            .send({
                email:user.email,
                password:user.password
            });
        expect(response.body).toHaveProperty('token');
    });

    it('should be able to access private routes when authenticated', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .get('/dashboard')
            .set('authorization',`Bearer ${user.generateToken()}`);
        expect(response.status).toBe(200);
    });

    it('should be not able to access private routes when without jwt token', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .get('/dashboard')
        expect(response.status).toBe(401);
    });

    it('should be not able to access private routes with invalid jwt token', async () => {
        const user = await factory.create('User');
        const response = await request(app)
            .get('/dashboard')
            .set('authorization',`Bearer invalidToken`);
        expect(response.status).toBe(401);
    });
});