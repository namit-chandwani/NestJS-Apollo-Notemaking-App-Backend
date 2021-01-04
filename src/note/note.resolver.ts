import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Note } from './note.entity';
import { NoteType } from './note.type';
import { NoteService } from './note.service';
import { CommentService } from './../comment/comment.service';
import { CreateNoteInput } from './note.input';
import { AssignCommentsToNoteInput } from './assign-comments-to-note.input';

@Resolver((of) => NoteType)
export class NoteResolver {
  constructor(
    private noteService: NoteService,
    private commentService: CommentService,
  ) {}

  @Query((returns) => [NoteType])
  notes() {
    return this.noteService.getNotes();
  }

  @Query((returns) => NoteType)
  note(@Args('id') id: string) {
    return this.noteService.getNote(id);
  }

  @Mutation((returns) => NoteType)
  createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.noteService.createNote(createNoteInput);
  }

  @Mutation((returns) => NoteType)
  assignCommentsToNote(
    @Args('assignCommentsToNoteInput')
    assignCommentsToNoteInput: AssignCommentsToNoteInput,
  ) {
    const { noteId, commentIds } = assignCommentsToNoteInput;
    return this.noteService.assignCommentsToNote(noteId, commentIds);
  }

  @ResolveField()
  comments(@Parent() note: Note) {
    return this.commentService.getResolvedComments(note.comments);
  }
}
