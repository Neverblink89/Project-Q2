
exports.seed = function(knex, Promise) {

  return knex('order').del()
    .then(function () {

      return knex('order').insert([
        {description: 'variety of pies', size: 10, status: 'sealed', date: '04/25/18', deadline: '10pm', confirmation: 'unconfirmed', tax_value: '$50'},
        {description: 'several turkey sandwiches', size: 8, status: 'sealed', date: '04/29/18', deadline: '8pm', confirmation: 'unconfirmed', tax_value: '$60' },
        {description: 'french bread loafs', size: 12, status: 'unsealed', date: '05/12/18', deadline: '11pm', confirmation: 'unconfirmed', tax_value: '$30'}
      ]);
    });
};
