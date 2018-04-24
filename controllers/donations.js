const knex = require("../db/knex.js");

module.exports = {

charity: (req, res)=>{
  knex('order').where('id', req.params.id).then((result)=>{
    res.render('charity_summary', {order: result[0]});
  })
}




}
