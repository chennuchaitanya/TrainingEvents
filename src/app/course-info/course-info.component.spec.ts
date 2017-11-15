import { EventService } from './../event.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoComponent } from './course-info.component';

describe('CourseInfoComponent', () => {
  let component: CourseInfoComponent;
  let service:EventService;
  it('should return 1 if events are returned', () => {
    component=new CourseInfoComponent(null,service);
    component.ngOnInit();
    
    expect(component.events).toBe(1);
  });

 
});
