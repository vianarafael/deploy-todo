exports.up = function(knex) {
  return knex.schema.dropTable("todos").then(() => {
    return knex.schema.createTable("todos", function(table) {
      table.increments(); // id field with primary key
      table.string("todo");
    });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("todos").dropTable("todo");
};
