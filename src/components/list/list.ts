import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'MyList',
  templateUrl: 'list.html'
})
export class ListComponent {

  @Input()
  items: [String]

  constructor() {
    console.log('Hello ListComponent Component');
  }

}
