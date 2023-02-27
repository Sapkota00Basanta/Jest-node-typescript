import request from 'supertest';
import Knex from 'knex';
import { Model } from 'objection';

import { app } from '../server/util/server';

describe('books', () => {
  let knex: any;
  let seededBooks;

  beforeAll(async () => {
    knex = Knex({
      client: 'pg',
      connection: process.env.DATBASE_URL,
    });

    Model.knex(knex);

    seededBooks = await knex('book')
      .insert([{ name: 'A Game of Thrones', author: 'George R. R. Martin' }])
      .returning('*');
  });

  afterAll(async () => {
    knex.destroy();
  });

  describe('GET /books/:id', () => {
    test('It should return a book', async () => {
      const bookId = seededBooks[0].id;

      const { body: book } = await request(app)
        .get(`books/${bookId}`)
        .expect(200);

      expect(book).toBeObject();
      expect(book.id).toBe(bookId);
      expect(book.name).toBe('A Game of Thrones');
    });

    test('It should return 404 error', async () => {
      const bookId = 3000;

      const { body: errorBody } = await request(app)
        .get(`books/${bookId}`)
        .expect(404);

      expect(errorBody).toStrictEqual({
        message: 'Book not found',
      });
    });
  });
});
