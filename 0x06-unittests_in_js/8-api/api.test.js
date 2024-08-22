const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API', () => {
  it('should return the correct response for GET /', (done) => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      expect(response.headers['content-type']).to.include('text/html');
      expect(error).to.be.null;
      done();
    });
  });

  it('should return 404 for non-existent routes', (done) => {
    const options = {
      url: 'http://localhost:7865/nonexistent',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
