const request = require("supertest")("http://localhost/mantis/");
const { report } = require('../../../support/helper');

exports.get_allProjects = async (_this, token) => {

    const response = await request.get(`api/rest/projects/`)
      .set('Authorization', token) //Basic Z2xhZHlzOm5nTUYlMV4qODBVZG9KdmI'
    report(_this, response)
    return response;
};