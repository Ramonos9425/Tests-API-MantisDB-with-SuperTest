const request = require("supertest");
const addContext = require('mochawesome/addContext');

exports.GerarToken = async () => {

  const response = await request('https://engine.fretebras.dev.br').post("/auth/shipper/id")
  .set('Content-Type', 'application/json')
  .send('{"user_id": 24}')
  .expect(200)
  console.log('Token gerado')    
  console.log(response.body.access_token)                     
  return 'Bearer ' + response.body.access_token;

};

//Sempre passar this (contexto) e o response
exports.report = async (context, response) => {

  addContext(context, `
    Response Status: ${JSON.stringify(response.status, undefined, 2)} \n
    Response Body: ${JSON.stringify(response.body, undefined, 2)} \n
    Response Headers: ${JSON.stringify(response.headers, undefined, 2)} \n
    Response: ${JSON.stringify(response, undefined, 2)}`);
};

exports.ValidarAutenticacao = async (route) => {

  // A função serve para qualquer tipo de requisição, já que o método é validado após a autenticação da rota. 
  
      const response = await request.get(route)
      .expect(401)    
  
  }
  
