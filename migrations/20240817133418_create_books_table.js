/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary(); // auto-increment id
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.text("review").notNullable();
    table.timestamps(true, true); // created_at dan updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
