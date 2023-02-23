exports.up = async function (knex) {
  await knex.schema.createTable('book', function (table) {
    table.increments('id').primary().unique();
    table.string('name').notNullable();
    table.string('author').notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('book');
};
