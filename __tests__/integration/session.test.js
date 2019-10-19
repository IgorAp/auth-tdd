const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication',()=>{
    beforeEach(async () => {
        await truncate();
    });

    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name:'igor aparecido da silva',
            email:'igor@gmal.com12',
            password_hash:'123123'
        });
        const response = await request(app)
            .post('/sessions')
            .send({
                email:user.email,
                password_hash:user.password_hash
            });
        expect(response.status).toBe(200);
    },30000);
});