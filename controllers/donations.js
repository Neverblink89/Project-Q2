const knex = require("../db/knex.js");

module.exports = {

view_order: (req, res)=>{
  knex('order').where('id', req.params.id).then((result)=>{
    knex('note').where('id', req.params.id).then((results)=>{
      res.render('view_order', {order: result[0], note: results});
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
},
donor_view_order: (req, res)=>{
  knex('order').where('id', req.params.id).then((result)=>{
    knex('note').where('id', req.params.id).then((results)=>{
      res.render('donor_view_order', {order: result[0], note: results[0]});
    })
  })
},
delete: (req, res)=>{
  knex('order').where('id', req.params.id).delete().then(()=>{
    res.redirect('/donorSummary');
  })
},
update_completed: (req, res)=>{
  knex('order').where('id', req.params.id).update({
    confirmation: "completed"
  }).then(()=>{
    res.redirect('/donorSummary');
  })
},
edit: (req, res)=>{
  knex('order').where('id', req.params.id).update({
    description: req.body.description,
    size: req.body.size,
    date: req.body.date,
    deadline: req.body.deadline,
    address: req.body.address,
    confirmation: req.body.confirmation,
    tax_value: req.body.tax_value
  }).then(()=>{
    res.redirect('/donorSummary');
  })
},
charity_summary: (req, res)=>{
  knex('user').where('id', req.session.user_id).then((results)=>{
    let user = results[0];
    knex('order').where("user_id", req.session.user_id).then((result)=>{
      res.render('charitySummary', {user: user, orders: result});
    })
  })
}



}
