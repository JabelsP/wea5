import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeatCategory } from '../shared/entities/seatcategory';
import { SeatRow } from '../shared/entities/seatrow';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'apollo-row-editor',
  templateUrl: './row-editor.component.html',
  styleUrls: ['./row-editor.component.css']
})
export class RowEditorComponent implements OnInit {

  rows: SeatRow[];
  categories: SeatCategory[];

  newRowNumber:number;
  newCat:string;
  newId:number;
  newSeatRow:SeatRow= new SeatRow();
  

  constructor(private admin:AdminService,private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => this.admin.getRowsByHallId(params['hallId']).subscribe(res => {   
      this.rows = res;
      this.newId=params['hallId'];
      this.newCat=this.categories[0].name;
    }));

    this.admin.getAllCategories().subscribe(res=> this.categories=res);
  }


  updateRow(row:SeatRow, cat:string){
    row.categroyName=cat;
    this.admin.updateSeatRow(row).subscribe(res=>this.ngOnInit());
  }

  onSubmit(){
    this.newSeatRow.categroyName=this.newCat;
    this.newSeatRow.rowNumber=Number(this.newRowNumber);
    this.newSeatRow.cinemaHallId=Number(this.newId);

    this.admin.createSeatRow(this.newSeatRow).subscribe(res=> this.ngOnInit());
  }

  deleteRow(row:SeatRow){
    this.admin.deleteSeatRow(row).subscribe(res=> this.ngOnInit());
  }

}
