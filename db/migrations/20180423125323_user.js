
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('name');
    table.string('email');
    table.string('phone');
    table.string('password');
    table.string('user_type');
    table.string('avatar_img');
    table.timestamps(true, true);

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
