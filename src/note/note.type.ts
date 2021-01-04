import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CommentType } from './../comment/comment.type';

@ObjectType('Note')
export class NoteType {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field((type) => [CommentType])
  comments: string[];
}
