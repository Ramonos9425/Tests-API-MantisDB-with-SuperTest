const request = require("supertest")("https://gladys.fretebras.dev.br");
const { report } = require('../../helper.js');

exports.get_cities_nearby = async (_this, token) => {

    const response = await request.get(`/v1/cities/nearby?lat=12.23455&lng=-12.12312`)
    .set('Authorization', 'Basic Z2xhZHlzOm5nTUYlMV4qODBVZG9KdmI')
    report(_this, response)
    return response;
};