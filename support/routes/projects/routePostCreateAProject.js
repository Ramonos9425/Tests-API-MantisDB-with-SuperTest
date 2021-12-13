const request = require("supertest")("http://localhost/mantis/");
const { report } = require('../../../support/helper');

exports.post_createaproject = async (_this, token, body) => {

    const response = await request.post(`api/rest/projects/`)
      .set('Authorization', token) //Basic Z2xhZHlzOm5nTUYlMV4qODBVZG9KdmI'
      .set('Content-Type', 'application/json')
      .send(body)
    report(_this, response)
    return response;
};