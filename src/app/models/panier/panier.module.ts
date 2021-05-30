import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../client/client.module';
import { ArticleModule } from '../article/article.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class PanierModule {
	id!: number;
	quantite!: number;
	date!: Date;
	proprietaire!: Client;
	article!: ArticleModule;
}
