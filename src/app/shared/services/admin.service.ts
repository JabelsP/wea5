import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CinemaHall } from '../entities/cinemahall';
import { Film } from '../entities/film';
import { Schedule } from '../entities/schedule';
import { Seat } from '../entities/seat';
import { SeatCategory } from '../entities/seatcategory';
import { SeatRow } from '../entities/seatrow';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  } 

  getAllHalls(): Observable<Array<CinemaHall>> {
    return this.http.get<Array<CinemaHall>>(`${environment.server}/hall`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  createSchedule(sched: Schedule):Observable<any>{
    //this.http.post(`${environment.server}/schedule`,sched).subscribe(res=>alert("123"));
    return this.http.post(`${environment.server}/schedule`,sched);
    
  }

  deleteSchedule(sched: Schedule):Observable<any>{
    return this.http.delete(`${environment.server}/schedule/${sched.id}`);
  }

  deleteFilm(film: Film):Observable<any>{
    return this.http.delete(`${environment.server}/film/${film.id}`);
  }

  createFilm(film: Film):Observable<any>{
    return this.http.post(`${environment.server}/film`,film);
    
  }

  updateFilm(film: Film):Observable<any>{
    return this.http.put(`${environment.server}/film`,film);
    
  }

  getRowsByHallId(id:number): Observable<Array<SeatRow>> {
    return this.http.get<Array<SeatRow>>(`${environment.server}/row/${id}`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  getAllCategories(): Observable<Array<SeatCategory>> {
    return this.http.get<Array<SeatCategory>>(`${environment.server}/category`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  updateSeatRow(row: SeatRow):Observable<any>{
    return this.http.put(`${environment.server}/row`,row);
    
  }

  createSeatRow(row: SeatRow):Observable<any>{
    return this.http.post(`${environment.server}/row`,row);
    
  }

  deleteSeatRow(row: SeatRow):Observable<any>{
    return this.http.delete(`${environment.server}/row/${row.cinemaHallId}/${row.rowNumber}`);
  }

  getSeatsByHallId(id:number): Observable<Array<Seat>> {
    return this.http.get<Array<Seat>>(`${environment.server}/seat/${id}`)
    .pipe(map(res => res), catchError(this.errorHandler));

  }

  createSeat(seat: Seat):Observable<any>{
    return this.http.post(`${environment.server}/seat`,seat);
    
  }

  deleteSeat(seat: Seat):Observable<any>{
    return this.http.delete(`${environment.server}/seat/${seat.id}`);
  }


  updateCategory(cat: SeatCategory):Observable<any>{
    return this.http.put(`${environment.server}/category`,cat);
    
  }


  createCategory(cat: SeatCategory):Observable<any>{
    return this.http.post(`${environment.server}/category`,cat);
    
  }
  
  createHall(hall: CinemaHall):Observable<any>{
    return this.http.post(`${environment.server}/hall`,hall);
    
  }




}
