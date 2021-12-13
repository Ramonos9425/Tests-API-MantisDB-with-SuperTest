const request = require("supertest")
const expect = require("chai").expect;
const { GerarToken, report } = require('../../support/helper');
const { get_allProjects } = require('../../support/routes/projects/routeGetAllProjects');
const Token = require('../../fixtures/token.json')
const TokenError = require('../../fixtures/tokenError.json')

describe("Mantis - Projects - All Projects", function () {

    var token
    before(async () => {
        //token = await GerarToken();
    });

    beforeEach(async () => {

    });

    it("Get - All Projects - Sucess", async function () {
        
        const response = await get_allProjects(this, Token.token)

        expect(response.status, "Status").to.equal(200)
        expect(response.body).to.not.be.null

    });
});
