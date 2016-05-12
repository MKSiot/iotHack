var Crime = require('./crimeModel.js');

// var crimeTest = {};
// crimeTest.type = "Murder";
// crimeTest.message = "Help! He's coming for me next!";
// crimeTest.time = Date.now();
// crimeTest.reportedBy = "John Smith";
// crimeTest.phoneNumber = 5551234567;
// crimeTest.zipCode = 12345;
// crimeTest.email = "johnsmith@gmail.com";

module.exports = {

  getAllCrimes: function(req, res, next){
    var findAllCrimes = Crime.find({}, function(err, docs){
      if(err) throw err;
      res.send(docs);
    })
  },

  addNewCrime: function(req, res, next){
    req.body.time = Date.now();
    var newCrime = new Crime(req.body);
    // var newCrime = new Crime(crimeTest);
    newCrime.save()
    .then(function(){
      res.status(200).send();
    })
    .catch(function(err){
      res.status(400).send();
      next(err);
    });
  }
}
