
const user = require("../controllers/user.js")

module.exports = function(app){
// index page
  app.get('/', user.home);

  app.post('/registration', user.register);

  app.post('/login', user.login);

  // app.get('/donations', user.donation)
  //
  // app.get('/createNew', user.createNew)

}
