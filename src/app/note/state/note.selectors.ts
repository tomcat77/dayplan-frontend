import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNote from './note.reducer';

export const selectNoteState = createFeatureSelector<fromNote.State>(
  fromNote.noteFeatureKey
);
