import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class EventService {
private url:string="";
events:any[];
  constructor(//private http:Http
  )   {}

  getEvents()
  {
  //   this.http.get(this.url)
  //   .subscribe(response=>{
  //     this.events=response.json();
  //   })

    this.events=[{
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
                  },
               {id:6,
                 title: "Java",
                  dateTime: new Date("2018-10-10"),
                  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/de/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%B6%D0%B0%D0%B2%D0%B0.png",
                  availableSeats: 30,
                  location:"Brisbane"
                  },
              {id:7,
                title: "Python",
                  dateTime: new Date("2017-02-02"),
                  imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/de/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%B6%D0%B0%D0%B2%D0%B0.png",
                  availableSeats: 30,
                  location:"Brisbane"
                  }
              ];
                
      return this.events;            
  }
}
