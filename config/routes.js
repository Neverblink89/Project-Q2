
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.index);

}
