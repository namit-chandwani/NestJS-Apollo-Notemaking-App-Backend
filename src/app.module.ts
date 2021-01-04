import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note/note.entity';
import { NoteModule } from './note/note.module';
import { Comment } from './comment/comment.entity';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/todo',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Note, Comment],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    NoteModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
