
const index = require("../controllers/index.js")


module.exports = function(app){

  app.get('/', index.home);

  app.post('/registration', index.register);

  app.post('/login', index.login);


}
