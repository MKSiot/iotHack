var userController = require('./userController.js');

module.exports = function(app){

  app.get('/getAllUsers', userController.getAllUsers);
  app.post('/addNewUser', userController.addNewUser);
  app.post('/signIn', userController.signIn);
  
};
