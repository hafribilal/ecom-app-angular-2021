import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class Compt {
	id!: number;
	username!: string;
	password!: string;
	email!: string;
	role!: string[];
}
