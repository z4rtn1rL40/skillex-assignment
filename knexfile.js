// Update with your config settings.
require('dotenv/config');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = () => {
  return {
    development: {
      client: 'mysql2',
      connection: {
        user: 'root',
        host: '127.0.0.1',
        password: 'root',
        database: 'assignment',
        charset: 'utf8mb4',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  };
};
