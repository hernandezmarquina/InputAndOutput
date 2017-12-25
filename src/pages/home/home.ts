import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Action } from '../../models/Action';
import { ActionType } from '../../models/ActionType';
import { ListPage } from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private message: String = "Message from custom component"
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  myMenuButtonPressed(action: Action){
    this.message = action.message

    if(action.type == ActionType.red) {
      this.navCtrl.push(ListPage)
    }
  }
}
