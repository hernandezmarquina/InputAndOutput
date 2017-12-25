import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ComponentApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ComponentApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(ComponentApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ComponentApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
