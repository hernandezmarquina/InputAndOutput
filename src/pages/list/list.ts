import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionType } from '../../models/ActionType';
import { Action } from '../../models/Action';
import { BlueData } from '../../data/blueData';
import { GreenData } from '../../data/greenData';
import { RedData } from '../../data/redData';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  items = Array<String>()

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');

    // Default values
    for (let index = 0; index < 10; index++) {
      this.items.push("Your item here");
    }
  }

  myMenuButtonPressed(action: Action) {

    switch (action.type) {

      case ActionType.blue:
        this.items = BlueData
        break;

      case ActionType.green:
        this.items = GreenData
        break;

      case ActionType.red:
        this.items = RedData
        break;
    }
  }

}
