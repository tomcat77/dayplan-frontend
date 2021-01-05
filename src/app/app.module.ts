import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, ROOT_REDUCERS } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { WeatherForecastComponent } from './weather/components/weather-forecast/weather-forecast.component';
import { NoteListComponent } from './note/components/note-list/note-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { WeatherEffects } from './weather/effects/weather.effects';
import * as fromNote from './note/state/note.reducer';
import { NoteEffects } from './note/state/note.effects';
import { NoteService } from './note/services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    EffectsModule.forRoot([WeatherEffects]),
    CardModule,
    ButtonModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromNote.noteFeatureKey, fromNote.reducer),
    EffectsModule.forFeature([NoteEffects])
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
