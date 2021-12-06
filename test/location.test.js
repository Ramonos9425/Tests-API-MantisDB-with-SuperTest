const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report, GerarDataAtual, GerarHoraAtual } = require('../support/helper.js');
const { post_location } = require('../support/routes/location/routeLocation');
const bodyLocationSucess = require('../fixtures/Location/bodyLocation.json')
const bodyWithoutCoordinate = require('../fixtures/Location/bodyWithoutCoordinate.json')
const bodyLocationCityError = require('../fixtures/Location/bodyLocationCityError.json')
const bodyLocationStateError = require('../fixtures/Location/bodyLocationStateError.json')
const bodyLocationVehicleError = require('../fixtures/Location/bodyLocationVehicleError.json')
const bodyLocationEventError = require('../fixtures/Location/bodyLocationEventError.json')
const bodyLocationWithoutBody = require('../fixtures/Location/bodyLocationWithoutBody.json')
const bodyLocationFreightError = require('../fixtures/Location/bodyLocationFreightError.json')
const bodyLocationVehicleLicence = require('../fixtures/Location/bodyLocationVehicleLicenceError.json')
const bodyLocationPhoneError = require('../fixtures/Location/bodyLocationPhoneError.json')
const Token = require('../fixtures/token.json')
const TokenError = require('../fixtures/tokenError.json')


describe("Gladys - Location", function () {

    var token
    before(async () => {
       // token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Post - Gladys - Sucesso - Localizacao", async function () {

        const response = await post_location(this, Token.token, bodyLocationSucess)
        const dataAtual = await GerarDataAtual()
        const horaAtual = await GerarHoraAtual()

        expect(response.status, "Status").to.equal(201)
        expect(response.body).to.not.be.null
        expect(response.body.event).to.equal('checkin')
        expect(response.body.vehicle_id).to.equal(321643)
        expect(response.body.license_plate).to.equal('PLA-5555')
        expect(response.body.freight).to.equal("eb58e3e72765cffa4ea2983fb1417960-cd7696d5c91607c76012bb32b71c0fbc")
        expect(response.body.phone).to.equal('11 987654321')
        expect(response.body.city.name).to.equal('Sao dos Lagos')
        expect(response.body.city.state).to.equal('PR')
        expect(response.body.coordinate.latitude).to.equal(123.42382123288)
        expect(response.body.coordinate.longitude).to.equal(-122.0829001231266)
        expect(response.body.geolocation_enabled).to.equal(true)
        expect(response.body.timestamp).to.contain(dataAtual+'T')
        expect(response.body.timestamp).to.contain(horaAtual)
        expect(response.body.timestamp).to.contain("-03:00")

    });

    it("Post - Gladys - Sucesso- Sem campo de Coordenada", async function () {

        const response = await post_location(this, Token.token, bodyWithoutCoordinate)
        const dataAtual = await GerarDataAtual()
        const horaAtual = await GerarHoraAtual()

        expect(response.status, "Status").to.equal(201)
        expect(response.body).to.not.be.null
        expect(response.body.event).to.equal('checkin')
        expect(response.body.vehicle_id).to.equal(321643)
        expect(response.body.license_plate).to.equal('PLA-5555')
        expect(response.body.freight).to.equal("eb58e3e72765cffa4ea2983fb1417960-cd7696d5c91607c76012bb32b71c0fbc")
        expect(response.body.phone).to.equal('11 987654321')
        expect(response.body.city.name).to.equal('Sao dos Lagos')
        expect(response.body.city.state).to.equal('PR')
        expect(response.body.geolocation_enabled).to.equal(false)
        expect(response.body.timestamp).to.contain(dataAtual+'T')
        expect(response.body.timestamp).to.contain(horaAtual)
        expect(response.body.timestamp).to.contain("-03:00")
    });

    it("Post - Gladys - Falha de requisicao - Campo: City-Name", async function () {

        const response = await post_location(this, Token.token, bodyLocationCityError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Falha de requisicao - Campo: State", async function () {

        const response = await post_location(this, Token.token, bodyLocationStateError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Falha de requisicao - Campo: Vehicle", async function () {

        const response = await post_location(this, Token.token, bodyLocationVehicleError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Falha de requisicao - Campo: Event", async function () {

        const response = await post_location(this, Token.token, bodyLocationEventError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_event'
        })
    });

    it("Post - Gladys - Falha de requisicao - Campo: freight", async function () {

        const response = await post_location(this, Token.token, bodyLocationFreightError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Falha de requisicao - Campo: Licence Plate", async function () {

        const response = await post_location(this, Token.token, bodyLocationVehicleLicence)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Falha de requisicao - Campo: Phone", async function () {

        const response = await post_location(this, Token.token, bodyLocationPhoneError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Falha de requisicao - Sem Body", async function () {

        const response = await post_location(this, Token.token, bodyLocationWithoutBody)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_event'
        })
    }); 

    it("Post - Gladys - Falha de requisicao - Sem Token de Autorizacao", async function () {
        
        const response = await post_location(this, TokenError.tokenError, bodyLocationPhoneError)

        expect(response.status, "Status").to.equal(401)
        expect(response.body).contains({
            message: 'Invalid authentication credentials'
        })
    }); 
});

