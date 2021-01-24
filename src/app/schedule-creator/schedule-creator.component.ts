import { HttpUploadProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaHall } from '../shared/entities/cinemahall';
import { Schedule } from '../shared/entities/schedule';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-schedule-creator',
  templateUrl: './schedule-creator.component.html',
  styleUrls: ['./schedule-creator.component.css']
})
export class ScheduleCreatorComponent implements OnInit {

  halls : CinemaHall[];
  id:string;
  filmId:number;
  date: Date;
  hours: string;
  minutes: string;
  sched: Schedule= new Schedule();
  dateString:string;

  constructor(private admin :AdminService, private route: ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
    this.admin.getAllHalls().subscribe(res=> this.halls=res);
    this.route.params.subscribe(params => this.filmId=params['filmId']);

  }

  submitForm(){


   this.date.setUTCHours(Number(this.hours)+24);
   this.date.setUTCMinutes(Number(this.minutes));

    this.sched.cinemaHallId=Number(this.id);
    this.sched.startTime=this.date;
    this.sched.filmId= Number(this.filmId);

    this.admin.createSchedule(this.sched).subscribe(res=>this.router.navigateByUrl(`/films/${this.filmId}`));

  }

}
