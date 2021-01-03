import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateNoteInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [ID], { defaultValue: [] })
  comments: string[];
}
