import request from 'supertest';
import { expect } from 'chai';
import app from '../backend/index.js'; // adjust path as needed

describe('GET /', () => {
  it('Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Hello World!');
  });
});
