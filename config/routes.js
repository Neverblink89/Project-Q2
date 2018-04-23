
const index = require("../controllers/index.js")
const user = require("../controllers/user.js")

module.exports = function(app){

  app.get('/', index.home);

  app.post('/registration', user.register);

  app.post('/login', user.login);


}
