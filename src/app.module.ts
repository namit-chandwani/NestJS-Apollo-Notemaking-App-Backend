import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './note/note.module';
import { Note } from './note/note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/todo',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Note],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
