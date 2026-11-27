const request = require('supertest');
const app = require('../src/app');

test('GET / returns the app name', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Broken App');
});

test('GET /health returns ok', async () => {
  const response = await request(app).get('/health');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ status: 'ok' });
});
