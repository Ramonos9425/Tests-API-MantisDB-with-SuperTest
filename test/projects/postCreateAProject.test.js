const request = require("supertest")
const Joi = require('joi');
const expect = require("chai").expect;
const { GerarToken, report, GerarDataAtual, GerarHoraAtual } = require('../../support/helper');
const { schemaLocation }= require('../../fixtures/schemas/location/schemaLocation')
const { post_createaproject } = require('../../support/routes/projects/routePostCreateAProject');
const bodyCreateAProject = require('../../fixtures/projects/bodyCreateAProject.json')
const Token = require('../../fixtures/token.json')
const TokenError = require('../../fixtures/tokenError.json')


describe.only("Mantis - Project - Create a project", function () {

    var token
    before(async () => {
       // token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Post - Creat a Project - Sucess", async function () {

        const response = await post_createaproject(this, Token.token, bodyCreateAProject)

        expect(response.status, "Status").to.equal(201)
        //Joi.assert(response.body, schemaLocation)

    });
  
});

