
const user = require("../controllers/user.js")
const donations = require("../controllers/donations.js")
const createNew = require("../controllers/createNew.js")

module.exports = function(app){
// index page
  app.get('/', user.home);

  app.post('/registration', user.register);

  app.post('/login', user.login);

  app.use(authenticateUser);


  app.get('/donations', user.donations);

  app.get('/createNew', user.createNew);

  // app.post('/newOrder', createNew.newOrder);

  app.get('/donorSummary', createNew.donor_summary);

  app.post('/newOrder/:id', createNew.newOrder);

  app.get('/viewOrder/:id', donations.view_order);

  app.get('/update/:id', donations.update);

  app.post('/note/:id', donations.note);

  app.get('/donorViewOrder/:id', donations.donor_view_order);

  app.get('/delete/:id', donations.delete);

  app.get('/updates/:id', donations.update_completed);

  app.post('/edit/:id', donations.edit);

  app.get('/logout', user.logout);

}
function authenticateUser(req, res, next){
  if(!req.session.user_id){
    res.redirect('/login');
  }else{
    next();
  }
}
