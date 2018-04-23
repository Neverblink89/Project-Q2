
exports.seed = function(knex, Promise) {

  return knex('note').del()
    .then(function () {

      return knex('note').insert([
        {user_id: 3, order_id: 1, comment: 'will be picking up by 9:30pm'},
        {user_id: 3, order_id: 2, comment: 'please let me know if there will be any additions to this orer, pick up will be on time'},
        {user_id: 4, order_id: 3, comment: 'will be arriving by 10pm to seal food'}
      ]);
    });
};
