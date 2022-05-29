/* eslint-disable no-underscore-dangle */
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { Drivers } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  entryComponents: [],
  imports: [
    ScrollingModule,
    AppRoutingModule,
    BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot({ driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB] }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
