import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteResolver } from './note.resolver';
import { NoteService } from './note.service';
import { Note } from './note.entity';
import { CommentModule } from './../comment/comment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Note]), CommentModule],
  controllers: [],
  providers: [NoteResolver, NoteService],
})
export class NoteModule {}
