import request from 'supertest';
import app from '../../server';
import pool from '../../config/database';


beforeAll(async () => {
  await pool.query('DELETE FROM books');
});

describe('Book Controller', () => {
  test('Deve listar todos os livros', async () => {
    const response = await request(app).get('/books');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('Deve adicionar um novo livro', async () => {
    const newBook = {
      title: 'Livro de Teste',
      author: 'Autor Teste',
      price: 25.99,
    };
    const response = await request(app)
      .post('/books')
      .send(newBook);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newBook.title);
    expect(response.body.author).toBe(newBook.author);
    expect(response.body.price).toBe(newBook.price);
  });
});
