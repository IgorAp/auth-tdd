const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name:'Vinicius',
    email:'vini@teste.com',
    password_hash:'11123123'
})
module.exports = routes;