import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalModule } from './local/local.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [LocalModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
