import { Resolver, Query } from '@nestjs/graphql';
import { NoteType } from './note.type';

@Resolver((of) => NoteType)
export class NoteResolver {
  @Query((returns) => NoteType)
  note() {
    return {
      _id: '1234',
      title: 'First Note',
      description: 'trial',
    };
  }
}
