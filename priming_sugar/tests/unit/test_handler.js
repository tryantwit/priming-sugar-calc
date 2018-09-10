'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;


describe('Tests handler', function () {
  it('verifies successful response', async () => {
    event = {
      "body": "{\n\t\"volumeOfBeer\": 5,\n\t\"volumeCO2\": 2.5,\n\t\"fermentationTemp\": 65\n}"
    }

    const result = await app.lambdaHandler(event, context)
    expect(result).to.be.an('object');
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an('string');

    let response = JSON.parse(result.body);

    expect(response).to.be.an('object');
    expect(response.message.corn_sugar).to.be.equal(121.13);
  });
});
