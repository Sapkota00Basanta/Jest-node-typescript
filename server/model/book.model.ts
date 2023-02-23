import { Model, ModelObject } from 'objection';

export class Book extends Model {
  id!: string; // ! mark means no nullable
  name!: string;
  author!: string;

  static tableName = 'book';
  static idColumn = 'id';
}

export type BookShape = ModelObject<Book>;
