import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../shared/entities/film';

@Component({
  selector: 'div.apollo-film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.css']
})
export class FilmListItemComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
