const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report } = require('../../support/helper.js');
const { post_location } = require('../../support/routes/location/routeLocation');

describe("Gladys - Location", function () {

    var token
    before(async () => {
        token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Get - Gladys - Sucess", async function () {

        const response = await get_cities_nearby(this, token)

        expect(response.status, "Status").to.equal(200)
        expect(response.body).to.not.be.null

    });

});

