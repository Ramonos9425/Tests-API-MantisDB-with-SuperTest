const request = require("supertest");
const addContext = require('mochawesome/addContext');

exports.GerarToken = async () => {

  const response = await request('https://...').post("/...")
  .set('Content-Type', 'application/json')
  .send('')
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
  
exports.GerarDataAtual= async () => {

  var data = new Date()
  var dia = String(data.getDate()).padStart(2,'0')
  var mes = String(data.getMonth()+1).padStart(2,'0')
  var ano = data.getFullYear()
  var dataAtual = ano+'-'+mes+'-'+dia

  return dataAtual
};

exports.GerarHoraAtual= async () => {

  var data = new Date()
  var hora = String(data.getHours()).padStart(2,'0')
  var min = String(data.getMinutes()).padStart(2,'0')
  var seg = data.getSeconds()//da uma diferenca na hr de validar
  var mseg = data.getMilliseconds()//fica inviavel tmb de validar
  var horaAtual = hora+':'+min

  return horaAtual
};