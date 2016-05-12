var crimeController = require('./crimeController.js');

module.exports = function(app){
  app.get('/getAllCrimes', crimeController.getAllCrimes);
  app.post('/addNewCrime', crimeController.addNewCrime);
}
