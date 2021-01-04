import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Note } from './note.entity';
import { CreateNoteInput } from './note.input';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async getNotes(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async getNote(id: string): Promise<Note> {
    return this.noteRepository.findOne({ id });
  }

  async createNote(createNoteInput: CreateNoteInput): Promise<Note> {
    const { title, description, comments } = createNoteInput;

    const note = this.noteRepository.create({
      id: uuid(),
      title,
      description,
      comments,
    });

    return this.noteRepository.save(note);
  }

  async assignCommentsToNote(
    noteId: string,
    commentIds: string[],
  ): Promise<Note> {
    const note = await this.noteRepository.findOne({ id: noteId });
    note.comments = [...note.comments, ...commentIds];
    return this.noteRepository.save(note);
  }
}
