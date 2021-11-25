const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report } = require('../../support/helper.js');
const { post_location } = require('../../support/routes/location/routeLocation');
const bodyLocationSucess = require('../../support/bodies/Location/bodyLocation.json')
const bodyWithoutLocation = require('../../support/bodies/Location/bodyWithoutLocation.json')
const bodyLocationCityError = require('../../support/bodies/Location/bodyLocationCityError.json')
const bodyLocationStateError = require('../../support/bodies/Location/bodyLocationStateError.json')
const bodyLocationVehicleError = require('../../support/bodies/Location/bodyLocationVehicleError.json')
const bodyLocationEventError = require('../../support/bodies/Location/bodyLocationEventError.json')
const bodyLocationWithoutBody = require('../../support/bodies/Location/bodyLocationWithoutBody.json')

describe("Gladys - Location", function () {

    var token
    before(async () => {
        token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Post - Glays - Sucess Location", async function () {

        const response = await post_location(this, token, bodyLocationSucess)

        console.log(response.body)
        //expect(response.status, 202) ///Aqui nao ta rolando -------------------
        expect(response.status, "Status").to.equal(201)
        expect(response.body).to.not.be.null
        expect(response.body).contains({
            event: 'checkin',
            vehicle_id: 321643,
           // selected_location: { city: 'Sao dos Lagos', state: 'PR' },
            location_enabled: true
        })
        /*selected_location:{
            city: 'Sao dos Lagos',
            state: 'PR' 
        } */ //HELLLLLLLPPPPPPPPPP
        //e o response time ?????????
        //Subir para o git *************
    });

    it("Post - Glays - Sucess Without Location", async function () {

        const response = await post_location(this, token, bodyWithoutLocation)

        console.log(response.body)
        expect(response.status, "Status").to.equal(201)
        expect(response.body).to.not.be.null
        expect(response.body).contains({
            event: 'checkin',
            vehicle_id: 321643,
            location_enabled: true
        })
    });

    it("Post - Glays - Bad Request Location City", async function () {

        const response = await post_location(this, token, bodyLocationCityError)

        console.log(response.body)
        expect(response.status, "Status").to.equal(400)
        expect(response.body).to.not.be.null
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Glays - Bad Request Location State", async function () {

        const response = await post_location(this, token, bodyLocationStateError)

        console.log(response.body)
        expect(response.status, "Status").to.equal(400)
        expect(response.body).to.not.be.null
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Glays - Bad Request Location Vehicle", async function () {

        const response = await post_location(this, token, bodyLocationVehicleError)

        console.log(response.body)
        expect(response.status, "Status").to.equal(400)
        expect(response.body).to.not.be.null
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Glays - Bad Request Location Event", async function () {

        const response = await post_location(this, token, bodyLocationEventError)

        console.log(response.body)
        expect(response.status, "Status").to.equal(400)
        expect(response.body).to.not.be.null
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

    it("Post - Glays - Bad Request Location Without Body", async function () {

        const response = await post_location(this, token, bodyLocationWithoutBody)

        console.log(response.body)
        expect(response.status, "Status").to.equal(400)
        expect(response.body).to.not.be.null
        expect(response.body).contains({
            error: 'invalid_request_body'
        })
    });

});

