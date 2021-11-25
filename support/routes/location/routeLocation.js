const request = require("supertest")("https://gladys.fretebras.dev.br");
const { report } = require('../../helper.js');

exports.post_location = async (_this, token, body) => {

    const response = await request.post(`/v1/location`)
      .set('Authorization', 'Basic Z2xhZHlzOm5nTUYlMV4qODBVZG9KdmI')
      .set('Content-Type', 'application/json')
      .send(body)
    report(_this, response)
    return response;
};