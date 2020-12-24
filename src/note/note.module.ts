import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteResolver } from './note.resolver';
import { NoteService } from './note.service';
import { Note } from './note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [],
  providers: [NoteResolver, NoteService],
})
export class NoteModule {}
