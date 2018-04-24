const knex = require("../db/knex.js");

module.exports = {

view_order: (req, res)=>{
  knex('order').where('id', req.params.id).then((result)=>{
    knex('note').where('id', req.params.id).then((results)=>{
      res.render('view_order', {order: result[0], note: results[0]});
    })
  })
},
update: (req, res)=>{
  knex('order').where('id', req.params.id).update({
    confirmation: "confirmed"
  }).then(()=>{
    res.redirect(`/viewOrder/${req.params.id}`);
  })
},
note: (req, res)=>{
  
  knex('note').where('id', req.params.id).insert({
    comment: req.body.comment,
    user_id: req.session.user_id,
    order_id: req.params.id
  }).then(()=>{
    res.redirect(`/viewOrder/${req.params.id}`);

  })
}
}
