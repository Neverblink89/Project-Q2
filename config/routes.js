
const template = require("../controllers/index.js")
module.exports = function(app){

  app.get('/', template.index);

}
