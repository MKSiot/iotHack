var User = require ('./userModel.js');
var Q = require('q');

module.exports = {

  getAllUsers: function(req, res, next){
    var findAllUsers = User.find({}, function(err, docs){
      if(err) throw err;
      res.send(docs);
    });
  },

  addNewUser: function(req, res, next){

    var name = req.body.name;

    // var newUser = new User(userTest);
    var findUser = Q.nbind(User.findOne, User);
    findUser({name: name})
      .then(function(user) {
        if(user) {
          res.status(200).send('User already in the system');
        } else {
          var newUser = new User(req.body);
          newUser.save()
            .then(function(userling) {
              res.status(200).send({name: name});
            })
            .catch(function(err) {
              res.status(400).send();
              next(err);
            });
        }
      })
      .catch(function(err) {
        res.status(400).send();
        next(err);
      });

  },

  signIn: function(req, res, next) {

  }

};
