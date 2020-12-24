import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
