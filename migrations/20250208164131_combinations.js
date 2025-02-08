/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(`
      CREATE TABLE IF NOT EXISTS combinations (
              id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
              combinations JSON NOT NULL
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
      DROP TABLE IF EXISTS combinations
    `,
  );
};
