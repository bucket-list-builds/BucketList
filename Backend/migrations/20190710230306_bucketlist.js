exports.up = function(knex) {
  return knex.schema.createTable("bucketlist", bl => {
    bl.increments();

    bl.string("title").notNullable();
    bl.string("description").notNullable();

    bl.integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    bl.timestamps(true, false);

    bl.string("photo");
    bl.string("journal_entry");
    bl.boolean("completed").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("bucketlist");
};
