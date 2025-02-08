/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return knex.raw(`
    CREATE TABLE combination_items (
      combination_id CHAR(36) REFERENCES combinations(id) ON DELETE CASCADE,
      item_id CHAR(36) REFERENCES items(id) ON DELETE CASCADE,
      PRIMARY KEY (combination_id, item_id)
  );`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return knex.raw(
    `
      DROP TABLE IF EXISTS combination_items
    `,
  );
};
