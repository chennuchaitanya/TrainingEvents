import { TestBed, inject } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  let service:EventService;
  beforeEach(() => {
    service=new EventService();
    TestBed.configureTestingModule({
      providers: [EventService]
    });
  });

  it('should return 7 events', inject([EventService], (service: EventService) => {
    expect(service.getEvents().length).toBe(7);
  }));
});
