import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BasicAuth, Client, InventoryService} from '@c8y/client';
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

    }],
  bootstrap: [AppComponent]
})


export class AppModule { }
