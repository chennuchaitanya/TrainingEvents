import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEventsComponent } from './training-events.component';
import { EventService } from "../event.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';


describe('TrainingEventsComponent', () => {
  let component: TrainingEventsComponent;
  let service:EventService;
  let fixture: ComponentFixture<TrainingEventsComponent>;


  beforeEach(() => {
    service=new EventService();
    component=new TrainingEventsComponent(service);
  });

  it('should set Training Events property with items returned from server', () => {
    let events=[{
                  id:1,
                  title: "Nodejs",
                  dateTime: new Date("2018-01-01"),
                  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg",
                  availableSeats: 10,
                  location:"Sydney"
                  },
                {id:2,
                  title: "ReactJS",
                  dateTime: new Date("2018-06-06"),
                  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                  availableSeats: 30,
                  location:"Adelaide"
                  },
               {id:3,
                 title: "AngularJS",
                  dateTime: new Date("2018-02-02"),
                  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/1000px-AngularJS_logo.svg.png",
                  availableSeats: 30,
                  location:"Melbourne"
                  },
               {id:4,
                 title: "SAP",
                  dateTime: new Date("2018-04-04"),
                  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2000px-SAP_2011_logo.svg.png",
                  availableSeats: 30,
                  location:"Perth"
                  },
               {id:5,
                 title: "Dotnet",
                  dateTime: new Date("2018-03-03"),
                  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png",
                  availableSeats: 30,
                  location:"Canberra"
                  }
              
              ];
    
    component.ngOnInit();
   
    expect(component.events.length).toBe(5);
  });
  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
