import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Tabs1Page} from '../tabs1/tabs1';
import {Tabs2Page} from '../tabs2/tabs2';
import {Tabs3Page} from '../tabs3/tabs3';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
    tabs1Page=Tabs1Page;
    tabs2Page=Tabs2Page;
    tabs3Page=Tabs3Page;
    llamadas=15;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
