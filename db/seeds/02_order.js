
exports.seed = function(knex, Promise) {

  return knex('order').del()
    .then(function () {

      return knex('order').insert([
        {user_id: 1, description: 'variety of pies', size: 10, date: '04/25/18', deadline: '10pm', confirmation: 'unconfirmed', tax_value: '$50'},
        {user_id: 1, description: 'several turkey sandwiches', size: 8, date: '04/29/18', deadline: '8pm', confirmation: 'unconfirmed', tax_value: '$60' },
        {user_id: 2, description: 'french bread loafs', size: 12, date: '05/12/18', deadline: '11pm', confirmation: 'unconfirmed', tax_value: '$30'}
      ]);
    });
};
