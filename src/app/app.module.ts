import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BasicAuth, Client, InventoryService, EventService} from '@c8y/client';
// import { GpS3ImageViewerModule } from 'projects/gp-s3-image-viewer/src/public_api';
import { GpS3ImageViewerModule } from './../../projects/gp-s3-image-viewer/src/lib/gp-s3-image-viewer.module';



const auth = new BasicAuth({
  user: 'demo@democenter.com',
  password: 'Demo2020!',
  tenant: 't23534448'
});

const client = new Client(auth, 'http://localhost:4200');
client.setAuth(auth);
const fetchClient = client.core;

const auth2 = new BasicAuth({
  user: 'sabreen.irfana@softwareag.com',
  password: 'Demo20202!',
  tenant: 't220978005'
});

const client2 = new Client(auth2, 'http://localhost:4200');
client2.setAuth(auth2);
const fetchClient2 = client2.core;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GpS3ImageViewerModule
  ],
  providers: [
    {
    provide: InventoryService,
    useFactory: () => {
        return new InventoryService(fetchClient);
        }

    },
    {
      provide: EventService,
      useFactory: () => {
          return new EventService(fetchClient2, client2.realtime);
          }
  
      }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
