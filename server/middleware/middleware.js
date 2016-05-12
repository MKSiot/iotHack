'use strict'

module.exports = function(app, express){

  var crimeRouter = express.Router();
  var userRouter = express.Router();

  app.use('/api/crimes', crimeRouter);
  app.use('/api/users', userRouter);

  require('../crime/crimeRoutes.js')(crimeRouter);
  require('../user/userRoutes.js')(userRouter);

}