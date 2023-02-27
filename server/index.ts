import { logger } from './common/logger';
import Knex from 'knex';
import { Model } from 'objection';
import { app } from './util/server';

// configure Database
// const knexConfiguration = Knex({
//   client: 'pg',
//   connection: process.env.DATABASE_URL,
//   migrations: {
//     extension: 'ts',
//     // tableName: 'test_table_migration',
//     // directory: 'server/db/migrations',
//   },
// });

// Connect database to Objection
// Model.knex(knexConfiguration);

// Define port & host for express server
const port = parseInt(process.env.PORT ?? '3000');
const host = process.env.HOST ?? 'localhost';

// Starting sever event to listen
app.listen(port, host, () => {
  logger.info(`Sever running on http://${host}:${port}`);
});
