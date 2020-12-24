import { Module } from '@nestjs/common';
import { NoteResolver } from './note.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [NoteResolver],
})
export class NoteModule {}
