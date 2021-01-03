import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Comment')
export class CommentType {
  @Field((type) => ID)
  id: string;

  @Field()
  text: string;

  @Field()
  description: string;
}
