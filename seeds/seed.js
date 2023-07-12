// honestly, I probably won't be able to use this file

const connection = require('../config/connection');
const { User, Thought } = require('../models')
const { getRandomUser } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    
});