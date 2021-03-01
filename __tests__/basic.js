const index = require('../index');
const axios = require('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('basic tests', () => {
    it('should run tests', () => {
        expect(1).toBe(1);
    });

    it('should get a TODO', async () => {
        const result = await index.getTodo(1);
        expect(result).toEqual({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        });
    });
});

// Example integration test with some API
describe('integration test', () => {

    let testDataId;

    // Don't forget to make the callback async if you need to use await
    afterEach(async () => {
        await axios.delete(`${baseUrl}/posts/${testDataId}`);
    });

    it('should create', () => {
        // do test work
        testDataId = 1;
    });

    describe('needs existing todo', () => {

        let testDataId;

        beforeEach(async () => {
            const response = await axios.post(`${baseUrl}/posts`, {
                userId: 1,
                title: 'test',
                completed: false,
            });
            testDataId = response.data.id;
        });

        it('should read', () => {});
        it('should update', () => {});
        it('should delete', () => {});
    });
});
