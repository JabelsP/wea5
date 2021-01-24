import { Component, OnInit } from '@angular/core';

import { CinemaHall } from '../shared/entities/cinemahall';
import { SeatCategory } from '../shared/entities/seatcategory';
import { AdminService } from '../shared/services/admin.service';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {

  constructor(private auth: AuthenticationService, private admin:AdminService) { }


  halls: CinemaHall[];
  categories: SeatCategory[];

  catValidation:Map<string,string> = new Map<string,string>();

  newCatName:string;
  newCatPrice:string;

  newCategory: SeatCategory=new SeatCategory();
  newHall: CinemaHall=new CinemaHall();


  ngOnInit(): void {
    this.admin.getAllHalls().subscribe(res=>this.halls=res);
    this.admin.getAllCategories().subscribe(res=>{this.categories=res;this.categories.forEach(cat=> this.catValidation[cat.name]="")});

    
  }


  logOut(){
    this.auth.logout();
  }
  
  updatePrice(cat:SeatCategory, price:number){

    cat.price=Number(price);
    this.admin.updateCategory(cat).subscribe(res=>this.ngOnInit())
  }

  createCategory(name:string, price:number){

    this.newCategory.price=Number(price);
    this.newCategory.name=name;
    this.admin.createCategory(this.newCategory).subscribe(res=>this.ngOnInit());
  }

  createHall(name:string){
    this.newHall.name=name;
    this.admin.createHall(this.newHall).subscribe(res=> this.ngOnInit());
  }


  isNumber(s:string):boolean{
    // var numericRepr = parseFloat(s);
    // console.log("hierasdf");
    // return isNaN(numericRepr);

    var patt = new RegExp('[0-9]+');

    console.log(!patt.test(s))
    return !patt.test(s);
  }


}
