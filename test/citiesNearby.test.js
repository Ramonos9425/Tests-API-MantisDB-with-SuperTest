const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report } = require('../support/helper.js');
const { get_cities_nearby } = require('../support/routes/cities/routeCitiesNearby');
const Coordinate = require('../fixtures/Cities/coordinateSucess.json')
const CoordinateLatError = require('../fixtures/Cities/coordinateLatError.json')
const CoordinateLngError = require('../fixtures/Cities/coordinateLngError.json')
const Token = require('../fixtures/token.json')
const TokenError = require('../fixtures/tokenError.json')

describe.skip("Gladys - Cities Nearby", function () {

    var token
    before(async () => {
        //token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Get - Gladys - Cities Nearby - Sucesso", async function () {
        
        const response = await get_cities_nearby(this, Token.token, Coordinate.lat, Coordinate.lng)

        expect(response.status, "Status").to.equal(200)
        expect(response.body).to.not.be.null

    });

    it("Get - Gladys - Cities Nearby - Falha de requisicao - Campo: latitude", async function () {

        const response = await get_cities_nearby(this, Token.token, CoordinateLatError.lat, CoordinateLatError.lng)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            message: 'Not Found'
        })
    });

    it("Get - Gladys - Cities Nearby - Falha de requisicao - Campo: longitude", async function () {

        const response = await get_cities_nearby(this, Token.token, CoordinateLngError.lat, CoordinateLngError.lng)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            message: 'Not Found'
        })
    });

    it("Get - Gladys - Cities Nearby - Falha de requisicao - Sem Token de Autorizacao", async function () {

        const response = await get_cities_nearby(this, TokenError.tokenError, Coordinate.lat, Coordinate.lng)

        expect(response.status, "Status").to.equal(401)
        expect(response.body).contains({
            message: 'Invalid authentication credentials'
        })
    });

});
