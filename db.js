const mongoose = require('mongoose');

const mongosUrl = process.env.MONGOS_URL;
console.log(mongosUrl)

const connect_mongos = async () => {
    try {
        await mongoose.connect(mongosUrl);
        console.log('Connected to Mongoes!');
    } catch (error) {
        console.error('Mongo connection error:', error.message);
    }
};

module.exports = connect_mongos;