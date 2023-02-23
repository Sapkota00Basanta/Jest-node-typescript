// This the main module where server is initialzed
import express from 'express';
import morgan from 'morgan';
import { logger } from './common/logger';
import allowCrossDomian from './middleware/crossOrigin.middleware';

// Define an express server
const app = express();

// Use Middlewares for express server
app.use(morgan('dev'));
app.use(allowCrossDomian);

// Define port & host for express server
const port = parseInt(process.env.PORT ?? '3000');
const host = process.env.HOST ?? 'localhost';

// Starting sever event to listen
app.listen(port, host, () => {
  logger.info(`Sever running on http://${host}:${port}`);
});
