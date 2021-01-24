import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Film } from '../shared/entities/film';
import { FilmOverviewService } from '../shared/services/film-overview.service';

@Component({
  selector: 'apollo-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  constructor(private fs : FilmOverviewService) { }

  keyup = new EventEmitter<string>();
  isLoading: boolean;
  foundFilms: Film[] = [];
  @Output() filmSelected = new EventEmitter<Film>();
  @Output() isVis: boolean = true;

  ngOnInit() {
    this.keyup
    .pipe(debounceTime(500), distinctUntilChanged(), tap(() => this.isLoading = true),
			switchMap(searchTerm => this.fs.getFilmsByName(searchTerm)), tap(() => this.isLoading = false))
		.subscribe(films => this.foundFilms = films);
  }  

}
