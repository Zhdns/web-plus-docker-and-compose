import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './helpers/validation.pipe';
import { ValidationExceptionFilter } from './helpers/validationExeptionFilter';
require('dotenv').config({path: '../../.env'})
const cors = require('cors');

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, { cors: true });
app.use(cors());

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ValidationExceptionFilter());

  await app.listen(PORT, () =>
    console.log(`Server is working on Port: ${PORT}`),
  );
}

bootstrap();
