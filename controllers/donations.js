const knex = require("../db/knex.js");

module.exports = {

view_order: (req, res)=>{
  knex('order').where('id', req.params.id).then((result)=>{
    res.render('view_order', {order: result[0]});
  })
},
update: (req, res)=>{
  knex('order').where('id', req.params.id).update({
    confirmation: "confirmed"
  }).then(()=>{
    res.redirect(`/viewOrder/${req.params.id}`);
  })

}



}
