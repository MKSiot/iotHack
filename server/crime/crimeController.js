var Crime = require('./crimeModel.js');

module.exports = {
  getAllCrimes: function(req, res, next){

    var findAllCrimes = Crime.find({}, function(err, docs){
      if(err){
        throw err;
      }
      console.log(docs);
      res.send(docs); //Make sure sending properly
    })
  },
  addNewCrime: function(req, res, next){
    req.body.time = Date.now();
    console.log('body', req.body);
    var test = new Crime(req.body);
    
    test.save()
    .then(function(){
      res.status(200).send();
    })
    .catch(function(err){
      res.status(400).send();
      next(err);
    });
  }
}