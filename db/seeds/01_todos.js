exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        { id: 1, todo: "rowValue1" },
        { id: 2, todo: "rowValue2" },
        { id: 3, todo: "rowValue3" }
      ]);
    });
};
