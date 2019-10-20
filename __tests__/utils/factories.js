const { factory } = require('factory-girl');

const { User } = require('../../src/app/models');

factory.define('User', User,{
    name:'Igor Aparecido da Silva',
    email:'igor@test.com',
    password:'123123'
});

module.exports = factory;
