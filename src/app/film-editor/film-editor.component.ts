import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../shared/entities/film';
import { AdminService } from '../shared/services/admin.service';
import { FilmOverviewService } from '../shared/services/film-overview.service';

@Component({
  selector: 'app-film-creator',
  templateUrl: './film-editor.component.html',
  styleUrls: ['./film-editor.component.css']
})
export class FilmEditorComponent implements OnInit {

  constructor(private admin:AdminService,private filmOverviewService:FilmOverviewService, private router:Router, private route:ActivatedRoute) { }

  title:string;
  genre:string;
  length:number;
  description:string;
  image:string;
  trailer:string;
  actors:string;

  id:number;

  film:Film=new Film();

  ngOnInit(): void {
    this.route.params.subscribe(params => this.filmOverviewService.getFilmById(params['id']).subscribe(res=>{
      this.id=res.id;
      this.title=res.title;
      this.genre=res.genre;
      this.length=res.length;
      this.description=res.description;
      this.image=res.image;
      this.trailer=res.trailer;
      this.actors=res.actors;
    
    }));
  }

  onSubmit(){
    this.film.id=this.id;
    this.film.title=this.title;
    this.film.genre=this.genre;
    this.film.length=Number(this.length);
    this.film.description=this.description;
    this.film.image=this.image;
    this.film.trailer=this.trailer;
    this.film.actors=this.actors;

    this.admin.updateFilm(this.film).subscribe(res=>this.router.navigateByUrl(`/films/${this.film.id}`));
  }

}
