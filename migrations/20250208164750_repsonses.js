/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(`
      CREATE TABLE IF NOT EXISTS responses (
        id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
        response TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
