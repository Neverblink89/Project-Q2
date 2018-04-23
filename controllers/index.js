const knex = require("../db/knex.js");

module.exports = {
  home: function(req, res) {
    res.render("index");
  },
}
