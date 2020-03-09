import { Injectable } from '@angular/core';
import { EventService } from '@c8y/client';

@Injectable()
export class GpS3ImageViewerService {

  constructor( public events: EventService) { }
  async getEvents(config) {
    let events = await this.events.listBySource$("1644").subscribe( data =>{
      console.log("============Data===============");
      console.log(data)
      return data;
    });
    return [];
  }
}
