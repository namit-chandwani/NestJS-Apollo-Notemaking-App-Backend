import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  text: string;

  @Field()
  description: string;
}
