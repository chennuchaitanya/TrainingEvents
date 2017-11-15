// import { GMapsService } from './gmaps.service';
import { EventService } from './event.service';
import { CourseInfoComponent } from './course-info/course-info.component';
import { TrainingEventsComponent } from './training-events/training-events.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingEventsComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    
    {path:'training-events/:id', component:CourseInfoComponent},
    {path:'training-events', component:TrainingEventsComponent}
      
    
    ])
  ],
  providers: [
    EventService
    //GMapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
