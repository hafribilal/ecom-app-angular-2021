import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin } from '../admin/admin.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class ArticleModule extends Object {
	id!: number;
	titre!: string;
	description!: string;
	price!: number;
	type!: string;
	stock!: number;
	vendeur!: Admin;
}
