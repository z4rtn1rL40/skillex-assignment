/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(`
      CREATE TABLE IF NOT EXISTS responses (
        id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
        combination_id CHAR(36) REFERENCES combinations(id) ON DELETE NO ACTION
      )
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.raw(
    `
      DROP TABLE IF EXISTS responses
    `,
  );
};
