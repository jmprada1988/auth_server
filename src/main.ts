import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const swaggerOption = new DocumentBuilder()
    .setTitle('Helix Genetics Authentication Server')
    .setDescription('Helix Genetics Authentication Server')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerOption)
  SwaggerModule.setup('api', app, document)
  await app.listen(3000)
}
bootstrap()
