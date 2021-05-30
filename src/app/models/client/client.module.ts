import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compt } from '../compt/compt.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class Client extends Compt {
	nom!: string;
	prenom!: string
	tele!: string;
}
