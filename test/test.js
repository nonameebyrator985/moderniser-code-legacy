const assert = require('assert');
const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('devrait retourner le message de bienvenue', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Contenu-Type', /html/)
      .expect(/Bienvenue dans l'application moderne !/, done);
  });
});
