import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-events',
  templateUrl: './training-events.component.html',
  styleUrls: ['./training-events.component.css']
})
export class TrainingEventsComponent implements OnInit {
events:any[];
myEvents:any[];
location;
  constructor(private eventService:EventService) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords); 
      });
   }
    let currentDate=new Date();
    
    this.events= this.eventService.getEvents()
                .filter(x=>x.dateTime>currentDate)
                .slice(0,5)
                .sort(function(a,b){ 
                  a=new Date(a.dateTime);
                  b=new Date(b.dateTime);
                  return a-b;
                });
    
  }

}
