const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report } = require('../support/helper.js');
const { get_cities_nearby } = require('../support/routes/cities/routeCitiesNearby');
const Coordinate = require('../fixtures/Cities/coordinateSucess.json')
const CoordinateLatError = require('../fixtures/Cities/coordinateLatError.json')
const CoordinateLngError = require('../fixtures/Cities/coordinateLngError.json')
const TokenError = require('../fixtures/tokenError.json')

describe("Gladys - Location", function () {

    var token
    before(async () => {
        token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Get - Gladys - Cities Nearby - Sucess", async function () {
        
        const response = await get_cities_nearby(this, token, Coordinate.lat, Coordinate.lng)

        expect(response.status, "Status").to.equal(200)
        expect(response.body).to.not.be.null

    });

    it("Get - Gladys - Cities Nearby - Bad Request latitude", async function () {

        const response = await get_cities_nearby(this, token, CoordinateLatError.lat, CoordinateLatError.lng)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            message: 'Not Found'
        })
    });

    it("Get - Gladys - Cities Nearby - Bad Request longitude", async function () {

        const response = await get_cities_nearby(this, token, CoordinateLngError.lat, CoordinateLngError.lng)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            message: 'Not Found'
        })
    });

    it("Get - Gladys - Cities Nearby - Bad Request Without Token Authorization", async function () {

        const response = await get_cities_nearby(this, TokenError.tokenError, Coordinate.lat, Coordinate.lng)

        expect(response.status, "Status").to.equal(401)
        expect(response.body).contains({
            message: 'Invalid authentication credentials'
        })
    });

});
