const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (_req, res) => res.send('Hello from app-code-<rollno>!'));

describe('GET /', () => {
  it('responds with correct message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from app-code-<rollno>!');
  });
});
