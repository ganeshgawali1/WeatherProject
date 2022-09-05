import { Component, OnInit } from '@angular/core';
import { WheatherData } from './models/wheather.model';
import { WheatherService } from './servicess/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private wheatherService:WheatherService){

  }
  
  wheatherData?:WheatherData;
  ngOnInit(): void {
   this.wheatherService.getwheatherdata('wheatherData').subscribe({
    next:(Response)=>{
      this.wheatherData=Response;
      console.log(Response);
    }
   })
  }
}
