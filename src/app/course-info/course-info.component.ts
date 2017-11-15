import { EventService } from './../event.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
events:{};
id;
  constructor(private route:ActivatedRoute, private eventService:EventService) { }

  ngOnInit() {

     this.route.paramMap.subscribe(params=>{
       this.id=+params.get('id');
      this.events=this.eventService.getEvents().filter(x=>x.id==this.id);
      console.log(this.events)
    });
  }


}
