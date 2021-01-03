import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class AssignCommentsToNoteInput {
  @Field((type) => ID)
  noteId: string;

  @Field((type) => [ID])
  commentIds: string[];
}
