import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentType } from './comment.type';
import { CreateCommentInput } from './comment.input';

@Resolver((of) => CommentType)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query((returns) => [CommentType])
  comments() {
    return this.commentService.getComments();
  }

  @Query((returns) => CommentType)
  comment(@Args('id') id: string) {
    return this.commentService.getComment(id);
  }

  @Mutation((returns) => CommentType)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ) {
    return this.commentService.createComment(createCommentInput);
  }
}
