// Executed during a migration
exports.up = function (knex) {
  return knex.schema
    .createTable("books", (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.integer("");
    })
    .createTable("pengunjung", (table) => {
      table.increments("visitors");
      table.string("").notNullable();
      table.boolean("").defaultTo(false);
      table.integer("").unsigned().notNullable();

      table.foreign("").references("").inTable("").onDelete("CASCADE").onUpdate("CASCADE");
    });
};

// Executed during a rollback
exports.down = function (knex) {
  return (
    knex.schema
      // Here, delete tables in reverse order because todos depends on users
      .dropTableIfExists("books")
      .dropTableIfExists("pengunjung")
  );
};
