const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report } = require('../support/helper.js');
const { post_location } = require('../support/routes/location/routeLocation');
const bodyLocationSucess = require('../fixtures/Location/bodyLocation.json')
const bodyWithoutLocation = require('../fixtures/Location/bodyWithoutLocation.json')
const bodyLocationCityError = require('../fixtures/Location/bodyLocationCityError.json')
const bodyLocationStateError = require('../fixtures/Location/bodyLocationStateError.json')
const bodyLocationVehicleError = require('../fixtures/Location/bodyLocationVehicleError.json')
const bodyLocationEventError = require('../fixtures/Location/bodyLocationEventError.json')
const bodyLocationWithoutBody = require('../fixtures/Location/bodyLocationWithoutBody.json')
const bodyLocationFreightError = require('../fixtures/Location/bodyLocationFreightError.json')
const bodyLocationVehicleLicence = require('../fixtures/Location/bodyLocationVehicleLicenceError.json')
const bodyLocationPhoneError = require('../fixtures/Location/bodyLocationPhoneError.json')

describe("Gladys - Location", function () {

    var token
    before(async () => {
        token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Post - Gladys - Sucess Location", async function () {

        const response = await post_location(this, token, bodyLocationSucess)

        expect(response.status, "Status").to.equal(201)
        expect(response.body).to.not.be.null
        expect(response.body.event).to.equal('checkin')
        expect(response.body.vehicle_id).to.equal(321643)
        expect(response.body.selected_location.city).to.equal('Sao dos Lagos')
        expect(response.body.selected_location.state).to.equal('PR')
        expect(response.body.current_location.latitude).to.equal(123.42382123288)
        expect(response.body.current_location.longitude).to.equal(-122.0829001231266)
        expect(response.body.location_enabled).to.equal(true)

    });

    it("Post - Gladys - Sucess Without Location", async function () {

        const response = await post_location(this, token, bodyWithoutLocation)

        expect(response.status, "Status").to.equal(201)
        expect(response.body).to.not.be.null
        expect(response.body.event).to.equal('checkin')
        expect(response.body.vehicle_id).to.equal(321643)
        expect(response.body.selected_location.city).to.equal('Sao dos Lagos')
        expect(response.body.selected_location.state).to.equal('PR')
        expect(response.body.location_enabled).to.equal(true)
    });

    it("Post - Gladys - Bad Request City", async function () {

        const response = await post_location(this, token, bodyLocationCityError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Bad Request State", async function () {

        const response = await post_location(this, token, bodyLocationStateError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Bad Request Vehicle", async function () {

        const response = await post_location(this, token, bodyLocationVehicleError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Bad Request Event", async function () {

        const response = await post_location(this, token, bodyLocationEventError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Bad Request freight", async function () {

        const response = await post_location(this, token, bodyLocationFreightError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Bad Request Vehicle Licence", async function () {

        const response = await post_location(this, token, bodyLocationVehicleLicence)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Bad Request Phone", async function () {

        const response = await post_location(this, token, bodyLocationPhoneError)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Gladys - Bad Request Location Without Body", async function () {

        const response = await post_location(this, token, bodyLocationWithoutBody)

        expect(response.status, "Status").to.equal(400)
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

});

