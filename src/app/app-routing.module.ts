import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';
import { FilmCreatorComponent } from './film-creator/film-creator.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmEditorComponent } from './film-editor/film-editor.component';
import { FilmListComponent } from './film-list/film-list.component';
import { LoginComponent } from './login/login.component';
import { RowEditorComponent } from './row-editor/row-editor.component';
import { ScheduleCreatorComponent } from './schedule-creator/schedule-creator.component';
import { SeatEditorComponent } from './seat-editor/seat-editor.component';


const routes: Routes = [ 
{
  path: '',
  redirectTo: 'films',
  pathMatch: 'full'
},
{
  path: 'index.html',
  redirectTo: 'films',
  pathMatch: 'full'
},
{
  path: 'films',
  component: FilmListComponent
},  
{
  path: 'films/:id',
  component: FilmDetailsComponent
},
{
  path: 'admin',
  component: AdminAreaComponent,
  canActivate: [CanNavigateToAdminGuard]
},
{
  path: 'login', 
  component: LoginComponent
},
{
  path: 'createSchedule/:filmId', 
  component: ScheduleCreatorComponent,
  canActivate: [CanNavigateToAdminGuard]
},
{
  path: 'createFilm', 
  component: FilmCreatorComponent,
  canActivate: [CanNavigateToAdminGuard]
},
{
  path: 'films/:id/edit', 
  component: FilmEditorComponent,
  canActivate: [CanNavigateToAdminGuard]
},
{
  path: 'admin/rows/:hallId', 
  component: RowEditorComponent,
  canActivate: [CanNavigateToAdminGuard]
},
{
  path: 'admin/seats/:hallId', 
  component: SeatEditorComponent,
  canActivate: [CanNavigateToAdminGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
