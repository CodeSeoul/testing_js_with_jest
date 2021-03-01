const index = require('../index');
const axios = require('axios');

jest.mock('axios');

describe('mocks', () => {

    beforeAll(() => {
        axios.get.mockReturnValueOnce({
            data: {
                message: 'success'
            }
        });
    });

    afterAll(() => {
        axios.get.mockReset();
    });

    it('should use a mocked version of axios', async () => {
        const result = await index.getTodo(1);
        expect(result).toEqual({
            message: 'success'
        });
    });

    describe('integration test', () => {

        afterEach(() => {
            axios.post.mockReset();
        });
    
        it('should create', () => {});
    
        describe('needs existing todo', () => {
    
            beforeEach(() => {
                axios.post.mockImplementation((url) => {
                    if (/dogs/.matches(url)) {
                        return {
                            data: {
                                fake: 'data',
                            },
                        };
                    }
                });
            });
    
            it('should read', () => {});
            it('should update', () => {});
            it('should delete', () => {});
        });
    });
});
