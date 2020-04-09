import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /swatches', () => {
    return request(app.getHttpServer())
      .get('/swatches')
      .expect(200)
      .expect([]);
  });

  it('GET /swatches/1', () => {
    return request(app.getHttpServer())
      .get('/swatches/1')
      .expect(404)
      .expect({
        statusCode: 404,
        message: 'Could not found swatch',
        error: 'Not Found',
      });
  });

  it('POST /swatches', () => {
    return request(app.getHttpServer())
      .post('/swatches')
      .send({
        name: 'My Swatch',
        price: '$10',
        image: 'url to image',
        color: '#467654',
      })
      .expect(201)
      .then(function end(response) {
        expect(response.body.active).toBe(true);
        expect(response.body.name).toBe('My Swatch');
        expect(response.body.price).toBe('$10');
        expect(response.body.image).toBe('url to image');
        expect(response.body.color).toBe('#467654');
      });
  });
});
