import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compt } from '../compt/compt.module';
import { PanierModule } from '../panier/panier.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class Client extends Compt {
	nom!: string;
	prenom!: string;
	ville!: string;
	tele!: string;
	paniers!: PanierModule;
}
