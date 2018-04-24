
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', (table)=>{
    table.increments();
    table.text('description');
    table.integer('user_id')
    .references('id')
    .inTable('user')
    .onDelete('CASCADE')
    .index();
    table.string('size');
    table.date('date');
    table.string('deadline');
    table.string('address');
    table.string('confirmation');
    table.string('tax_value');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order');
};
