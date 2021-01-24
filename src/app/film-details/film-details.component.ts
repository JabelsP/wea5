import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../shared/entities/film';
import { Schedule } from '../shared/entities/schedule';
import { AdminService } from '../shared/services/admin.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { FilmOverviewService } from '../shared/services/film-overview.service';

@Component({
  selector: 'apollo-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  @Input() film: Film = new Film();
  schedule: Schedule[];

  constructor(private filmOverviewService: FilmOverviewService,
              public auth: AuthenticationService,
              public admin: AdminService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => this.filmOverviewService.getFilmById(params['id']).subscribe(res => this.film = res));
    this.route.params.subscribe(params => this.filmOverviewService.getScheduleByFilmId(params['id']).subscribe(res =>{ 
      res.forEach(element => { //getting number of freeSeats for each schedule
        this.filmOverviewService.setFreeSeats(element).subscribe(amount=>element.freeSeats=amount);
      });
      this.schedule = res;

    }));


    
  }

  showFilmList() {
    this.router.navigateByUrl("/films");
  }

  fromChange(event){
    console.log(event.value);
  }

  delete(sched){
    this.admin.deleteSchedule(sched).subscribe(res=>this.ngOnInit());

  }

  deleteMovie(){
    this.admin.deleteFilm(this.film).subscribe(res=>this.showFilmList());
  }

}
