import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /swatches', () => {
    return request(app.getHttpServer())
      .get('/swatches')
      .expect(200)
      .expect([
        {
          active: true,
          name: "My Swatch",
          price: "$10",
          image: "url to image",
          color: "#467654",
          date: '2020-04-07T22:48:00.698Z',
        }
      ]);
  });
});
