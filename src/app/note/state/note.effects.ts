import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as NoteActions from './note.actions';


@Injectable()
export class NoteEffects {


  loadNotes$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NoteActions.loadNotes),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
