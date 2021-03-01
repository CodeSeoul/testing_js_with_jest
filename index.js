'use strict';

const axios = require('axios');

const getTodo = async (id) => {
    let result;
    try {
        result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    } catch(e) {
        console.error(`Failed to get TODO due to error: ${e}`);
        throw e;
    }
    return result.data;
}

module.exports = { getTodo };