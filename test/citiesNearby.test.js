const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report } = require('../support/helper.js');
const { get_cities_nearby } = require('../support/routes/cities/routeCitiesNearby');

describe("Gladys - Location", function () {

    var token
    before(async () => {
        token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Get - Gladys - Cities Nearby - Sucess", async function () {

        const response = await get_cities_nearby(this, token)

        expect(response.status, "Status").to.equal(200)
        expect(response.body).to.not.be.null

    });

});

