import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Swatch } from '../src/swatches/swatch.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<Swatch>;

  function createSwatch() {
    const swatch = new Swatch();
    swatch.name = 'My Swatch';
    swatch.price = '$10';
    swatch.color = 'red';
    swatch.image = 'swatch.jpg';
    swatch.active = true;

    return repository.save(swatch);
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    repository = moduleFixture.get('SwatchRepository');

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(() => repository.clear());

  afterAll(async () => {
    await app.close();
  });

  it('GET /swatches', () => {
    return request(app.getHttpServer())
      .get('/swatches')
      .expect(200)
      .expect([]);
  });

  it('GET /swatches/:id', async () => {
    const swatch = await createSwatch();

    const response = await request(app.getHttpServer())
      .get(`/swatches/${swatch.id}`)
    
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name: 'My Swatch',
    });
  });

  it('GET /swatches/999999', async () => {
    const response = await request(app.getHttpServer())
      .get('/swatches/999999')
    
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: 'Not Found',
      message: 'Could not found swatch',
      statusCode: 404,
    });
  });

  it('POST /swatches', async () => {
    const response = await request(app.getHttpServer())
      .post('/swatches')
      .send({
        name: 'My Swatch',
        price: '$10',
        image: 'url to image',
        color: '#467654',
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      name: 'My Swatch',
      price: '$10',
      image: 'url to image',
      color: '#467654',
      active: true,
    });
  });

  it('PUT /swatches/:id', async () => {
    const swatch = await createSwatch();

    const response = await request(app.getHttpServer())
      .put(`/swatches/${swatch.id}`)
      .send({
        price: '$15',        
      });

    expect(response.status).toBe(200);
    expect(response.body.price).toBe('$15');
  });

  it('DELETE /swatches/:id', async () => {
    const swatch = await createSwatch();

    const response = await request(app.getHttpServer())
      .delete(`/swatches/${swatch.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({});

    const count = await repository.count();

    expect(count).toBe(0);
  });
});
