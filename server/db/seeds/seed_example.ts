import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('book').del();

  // Inserts seed entries
  await knex('book').insert([
    { id: 1, name: 'Silly Humans', author: 'author1' },
    { id: 2, name: 'Too Good To Be True', author: 'author2' },
    { id: 3, name: 'How To Influence People & Friends', author: 'author3' },
  ]);
}
