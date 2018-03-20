import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs1Page } from '../pages/tabs1/tabs1';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { Tabs3Page } from '../pages/tabs3/tabs3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Tabs1Page,
    Tabs2Page,
    Tabs3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Tabs1Page,
    Tabs2Page,
    Tabs3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
