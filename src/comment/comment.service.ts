import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Comment } from './comment.entity';
import { CreateCommentInput } from './comment.input';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getComments(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async getComment(id: string): Promise<Comment> {
    return this.commentRepository.findOne({ id });
  }

  async createComment(
    createCommentInput: CreateCommentInput,
  ): Promise<Comment> {
    const { text, description } = createCommentInput;
    const comment = this.commentRepository.create({
      id: uuid(),
      text,
      description,
    });

    return this.commentRepository.save(comment);
  }

  async getResolvedComments(commentIds: string[]): Promise<Comment[]> {
    return this.commentRepository.find({ where: { id: { $in: commentIds } } });
  }
}
