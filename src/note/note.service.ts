import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { v4 as uuid } from 'uuid';

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

  async createNote(title, description): Promise<Note> {
    const note = this.noteRepository.create({ id: uuid(), title, description });

    return this.noteRepository.save(note);
  }
}
