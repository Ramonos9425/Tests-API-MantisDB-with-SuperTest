const request = require("supertest")("https://gladys.fretebras.dev.br");
const { report } = require('../../helper.js');

exports.get_cities_nearby = async (_this, token, lat, lng) => {

    const response = await request.get(`/v1/cities/nearby?lat=${lat}&lng=${lng}`)
    .set('Authorization', token)
    report(_this, response)
    return response;
};