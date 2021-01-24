import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../shared/entities/film';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-film-creator',
  templateUrl: './film-creator.component.html',
  styleUrls: ['./film-creator.component.css']
})
export class FilmCreatorComponent implements OnInit {

  constructor(private admin:AdminService, private router:Router) { }

  title:string;
  genre:string;
  length:number;
  description:string;
  image:string;
  trailer:string;
  actors:string;

  film:Film=new Film();

  ngOnInit(): void {
  }

  onSubmit(){
    this.film.title=this.title;
    this.film.genre=this.genre;
    this.film.length=Number(this.length);
    this.film.description=this.description;
    this.film.image=this.image;
    this.film.trailer=this.trailer;
    this.film.actors=this.actors;

    this.admin.createFilm(this.film).subscribe(res=> this.router.navigateByUrl("/films"));
  }

}
