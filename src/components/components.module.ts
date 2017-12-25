import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu';
import { ListComponent } from './list/list';
@NgModule({
	imports: [IonicModule, CommonModule],
	declarations: [
    	MenuComponent,
    ListComponent],
	exports: [
		MenuComponent,
    ListComponent]
})
export class ComponentsModule {}
