import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../entities/film';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { catchError, map, retry } from 'rxjs/operators';
import { Schedule } from '../entities/schedule';

@Injectable({
  providedIn: 'root'
})
export class FilmOverviewService {

  films: Film[];

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  } 

  getCurrent(): Observable<Array<Film>> {
    return this.http.get<Array<Film>>(`${environment.server}/film/current`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  getFilmsByName(name): Observable<Array<Film>> {
    return this.http.get<Array<Film>>(`${environment.server}/film/title/${name}`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  getFilmsByGenre(genre): Observable<Array<Film>> {
    return this.http.get<Array<Film>>(`${environment.server}/film/genre/${genre}`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  getFilmsByDate(from,to): Observable<Array<Film>> {
    return this.http.get<Array<Film>>(`${environment.server}/film/date/${from}/${to}`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  getFilmById(id): Observable<Film> {
    return this.http.get<Film>(`${environment.server}/film/${id}`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }
  getScheduleByFilmId(id): Observable<Array<Schedule>> {

    let sched: Observable<Array<Schedule>> = this.http.get<Array<Schedule>>(`${environment.server}/schedule/${id}`)
    .pipe(map(res => res), catchError(this.errorHandler));


    


    return sched;

  }

  setFreeSeats(sched: Schedule):  Observable<number>{

    return this.http.post<number>(`${environment.server}/schedule/free`,sched);

  }


}
