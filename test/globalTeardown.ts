import Knex from 'knex';
import { logger } from '../server/common/logger';
import { database } from './globalSetup';

module.exports = async () => {
  const knex = Knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
  });

  try {
    await knex.raw(`DROP DATABASE IF EXISTS ${database}`);
  } catch (error) {
    logger.warn(error);
    process.exit(1);
  }
};
