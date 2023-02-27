import Knex from 'knex';
import { logger } from '../server/common/logger';

export const database = 'test_book_database';

// Create the database
async function createTestDatabase() {
  const knex = Knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
  });

  try {
    await knex.raw(`DROP DATABASE IF EXISTS ${database}`);
    await knex.raw(`CREATE DATABASE ${database}`);
  } catch (error) {
    throw new Error(error);
  } finally {
    await knex.destroy();
  }
}

// Seed the database with schema and data
async function seedTestDatabase() {
  const knex = Knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
  });

  try {
    await knex.migrate.latest();
    await knex.seed.run();
  } catch (error) {
    throw new Error(error);
  } finally {
    await knex.destroy();
  }
}

module.exports = async () => {
  try {
    await createTestDatabase();
    await seedTestDatabase();
    logger.info('Test database created successfully');
  } catch (error) {
    logger.warn(error);
    process.exit(1);
  }
};
