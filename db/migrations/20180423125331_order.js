
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', (table)=>{
    table.increments();
    table.text('description');
    table.string('status');
    table.integer('size');
    table.date('date');
    table.string('deadline');
    table.string('confirmation');
    table.string('tax_value');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order');
};
