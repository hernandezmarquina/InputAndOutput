import { Component, Output, EventEmitter } from '@angular/core';
import { Action } from "../../models/Action"
import { ActionType } from "../../models/ActionType"

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'MyMenu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  actionType: ActionType

  @Output('button-pressed') eventEmiter = new EventEmitter<Action>();
  
  constructor() {
    
  }

  blueAction(){
    this.fireButtonClick(ActionType.blue, "Hello from Blue Button")
  }

  greenAction(){
    this.fireButtonClick(ActionType.green, "Hi! from Green Button")
  }

  redAction(){
    this.fireButtonClick(ActionType.red, "Hola from Red Button")
  }

  private fireButtonClick(actionType: ActionType, message: String){
    let action = new Action(actionType, message)
    this.eventEmiter.emit(action)
  }

}
