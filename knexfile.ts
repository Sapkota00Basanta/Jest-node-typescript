require('ts-node/register');

module.exports = {
  client: 'pg',
  connection:
    process.env.DATABASE_URL ?? 'postgresql://postgres@localhost/jest-test_dev',
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations_test',
    directory: 'server/db/migrations',
  },
  seeds: {
    directory: 'server/db/seeds',
  },
  timezone: 'UTC',
};
