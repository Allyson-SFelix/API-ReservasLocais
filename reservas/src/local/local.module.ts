import { Module } from '@nestjs/common';
import { LocalController } from './local.controller';
import { LocalService } from './local.service';
import { PrismaModule } from 'prisma/prisma.module';
import { ErroPatterns } from 'src/ErroPatterns/erroPatterns';
import { LocalDTO } from './dtos/local.dtos';

@Module({
  controllers: [LocalController],
  providers: [LocalService],
  imports:[LocalDTO,ErroPatterns,PrismaModule]
})
export class LocalModule {}
