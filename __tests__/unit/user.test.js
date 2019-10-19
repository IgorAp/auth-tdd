const bcripty = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');
describe('User', () => {
    beforeEach( async () => {
        await truncate();
    });
    it('should encrypt user password', async () => {
        const user = await User.create({
            name:'igor aparecido da silva',
            email:'igor@gmal.com12',
            password:'123123'
        });
        const compareHash = await bcripty.compare(user.password,user.password_hash);
        expect(compareHash).toBe(true);
    });
});