# Cumulocity Widget - S3 Image Viewer 

  This is an Angular 7 widget, which is designed for camera device to display the Events which are classified good and bad . 
  The widget also displays the image clicked by camera device. 

## Prerequisites:
   ##### Angular version 
  - Angular CLI version 7.2.4 (Angular 7).
   ##### Mandatory Library for Widget
  - Angular Material version 7.3.7
  - aws-sdk version 2.627.0
  - Cumulocity Library:         
    ```cmd
    npm install @c8y/client@1005.0.13
    npm install @c8y/ngx-components@1005.0.3
    npm install @c8y/style@1005.0.3

##### Cockpit Application
  
  1. Use your existing cockpit application or please refer  [Cumulocity  Guide](https://cumulocity.com/guides/web/how-to/#add-a-custom-widget) to create a new cockpit application.
  2. Make sure to install all pre-specified Mandatory Library in your cockpit application.
    So that your application has the following entries in `package.json `.
```
"@angular/material": "7.3.7",
"aws-sdk": "^2.627.0"
 ```
 ## Deployment Of Firmware Chart In Cockpit Application

##### 1. Library
Copy the 'gp-s3-image-viewer-0.104.0.tgz' library from dist folder of this project and place that in your cockpit application.

##### 2. Install Image Viewer Library

Add the following entry in dependencies in `package.json ` file
"gp-s3-image-viewer": "file: <location of the library gp-s3-image-viewer-0.104.0.tgz >",

after adding this entry do npm install.


##### 3. Import S3 Image Viewer Module

Import GpS3ImageViewerModule in app.module.ts and also place the imported Module under `@NgModule`.
```
import {GpS3ImageViewerModule} from 'gp-s3-image-viewer';
@NgModule({
  imports: [
    GpS3ImageViewerModule
      ]
  })
```
##### 3. Add Custom Branding

 - Install the base styles from npm with: ```npm install @c8y/style  ``` (please ignore if done as a Prerequisites)
 - Create a LESS file called for instance `branding.less ` .
 - Save it inside a new folder, which can have any name you like.
 - In `branding.less ` import following design templates.

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~font-awesome/less/font-awesome.less';
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```

- In your application  `package.json ` ->  `c8y` add `brandingEntry`.

`package.json ` ->  `c8y` Snippet
```
"c8y": {
    "application": {
      "name": "custom-cockpit",
      "contextPath": "custom-cockpit",
      "key": "custom-cockpit-application-key",
      "brandingEntry": "./branding/branding.less",
      "tabsHorizontal": true,
      "upgrade": true,
      "rightDrawer": true,
      "sensorAppOneLink": "http://onelink.to/pca6qe",
      "contentSecurityPolicy": "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' *.billwerk.com http: https: ws: wss:;  script-src 'self' open.mapquestapi.com *.twitter.com *.twimg.com 'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; img-src * data:; font-src * data:; frame-src *;"
    },
    "cli": {}
  }
```

## Development server

##### 1. Using `c8ycli`

Run `c8ycli server -u <http://cumulocity_tenant>` for a dev server. Navigate to `http://localhost:9000/apps/<cockpit application name>/`. The app will automatically reload if you change any of the source files.

##### 2. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "start": "c8ycli server  -u <http://cumulocity_tenant>",
  },
```
Run `npm run start ` for a dev server. Navigate to `http://localhost:9000/apps/<cockpit application name>/`. The app will automatically reload if you change any of the source files.

## Build

##### 1. Using `c8ycli`
Run `c8ycli build` 

##### 2. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "build": "c8ycli build",
  },
```
Run `npm run build ` 

## Deploy widget to the cockpit

##### 1. Using `c8ycli`
Run `c8ycli deploy -u <http://cumulocity_tenant>` 

##### 2. Using `package.json Scripts`
Update package.json start script 

```
"scripts": {
  "deploy": "c8ycli deploy -u <http://cumulocity_tenant>",
  },
```
Run `npm run deploy ` 

