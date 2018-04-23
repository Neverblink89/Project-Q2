
exports.up = function(knex, Promise) {
  return knex.schema.createTable('note', (table)=>{
    table.increments();
    table.integer('user_id')
    .references('id')
    .inTable('user')
    .onDelete('CASCADE')
    .index();
    table.integer('order_id')
    .references('id')
    .inTable('order')
    .onDelete('CASCADE')
    .index();
    table.text('comment');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('note');
};
