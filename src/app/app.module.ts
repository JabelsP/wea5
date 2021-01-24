import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { FormsModule } from '@angular/forms';

import { OAuthModule } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { LoginComponent } from './login/login.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { ScheduleCreatorComponent } from './schedule-creator/schedule-creator.component';
import { FilmCreatorComponent } from './film-creator/film-creator.component';
import { FilmEditorComponent } from './film-editor/film-editor.component';
import { RowEditorComponent } from './row-editor/row-editor.component';
import { SeatEditorComponent } from './seat-editor/seat-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmListItemComponent,
    FilmDetailsComponent,
    FilmSearchComponent,
    LoginComponent,
    AdminAreaComponent,
    ScheduleCreatorComponent,
    FilmCreatorComponent,
    FilmEditorComponent,
    RowEditorComponent,
    SeatEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
