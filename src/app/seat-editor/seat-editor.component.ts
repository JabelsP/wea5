import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seat } from '../shared/entities/seat';
import { SeatRow } from '../shared/entities/seatrow';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-seat-editor',
  templateUrl: './seat-editor.component.html',
  styleUrls: ['./seat-editor.component.css']
})
export class SeatEditorComponent implements OnInit {

  seats: Seat[];
  rows: SeatRow[];

  newRowNumber: number;
  newSeatNumber: number;

  cinemaHallId:number;

  newSeat:Seat=new Seat();


  

  constructor(private admin:AdminService,private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => this.admin.getRowsByHallId(params['hallId']).subscribe(res => {   
      this.rows = res;
      this.cinemaHallId=params['hallId'];
    }));

    this.route.params.subscribe(params => this.admin.getSeatsByHallId(params['hallId']).subscribe(res => {   
      this.seats = res;
    }));

  }



  onSubmit(){

    this.newSeat.cinemaHallId=Number(this.cinemaHallId);
    this.newSeat.rowNumber=Number(this.newRowNumber);
    this.newSeat.seatNumber=Number(this.newSeatNumber);
    this.admin.createSeat(this.newSeat).subscribe(res=> this.ngOnInit());
  }

  deleteSeat(seat:Seat){
    this.admin.deleteSeat(seat).subscribe(res=> this.ngOnInit());
  }
}
