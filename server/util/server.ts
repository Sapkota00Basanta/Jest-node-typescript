// This the main module where server is initialzed
import express, { Application, NextFunction, Request, Response } from 'express';
// import morgan from 'morgan';
import allowCrossDomian from '../middleware/crossOrigin.middleware';
import { Book, BookShape } from '../model/book.model';

// Define an express server
export const app: Application = express();

// Use Middlewares for express server
// app.use(morgan('dev'));
app.use(allowCrossDomian);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint for book
app.get(
  `/books/:id`,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      // Fetch the id from request parameter
      const { id } = request.params;

      // Get the book id data
      const bookData: any = await Book.query().findById(id);

      // Check if current id related data exists or not
      if (!bookData) {
        throw new Error(`No relevant book found for id:${id}`);
      }

      return response.status(200).send(bookData);
    } catch (error: any) {
      response.status(404).send({
        message: error.message,
      });
    }
  }
);
