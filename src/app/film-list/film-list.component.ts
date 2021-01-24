import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { Film } from '../shared/entities/film';
import { AdminService } from '../shared/services/admin.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { FilmOverviewService } from '../shared/services/film-overview.service';



@Component({
  selector: 'apollo-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films: Film[];
  fromDate :Date;
  toDate :Date;

  constructor(private filmOverviewService: FilmOverviewService,
              public auth: AuthenticationService,
              private admin: AdminService) { }

  ngOnInit(){
    this.filmOverviewService.getCurrent().subscribe(res => this.films = res);
  }



  getByGenre(genre){
    this.filmOverviewService.getFilmsByGenre(genre).subscribe(res => this.films = res);
  }

  getByDate(){
    this.filmOverviewService.getFilmsByDate(this.fromDate.toLocaleDateString(),this.toDate.toLocaleDateString()).subscribe(res => this.films = res);
  }

}
