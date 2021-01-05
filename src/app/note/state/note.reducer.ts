import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as NoteActions from './note.actions';

export const noteFeatureKey = 'note';

export interface Note {
  id: string;
  content: string;
  createdAt: Date;
}

export interface State extends EntityState<Note> {
  selectedNoteId: string | null;
}

export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>({
  selectId: (note: Note) => note.id,
  sortComparer: false,
});

export const initialState = adapter.getInitialState({
  selectedNoteId: null
});

export const reducer = createReducer(
  initialState,
  on(NoteActions.loadNotes, state => state),
);

