import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin } from '../admin/admin.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class ArticleModule {
	id!: number;
	titre!: string;
	description!: string;
	type!: string;
	stock!: number;
	vendeur!: Admin;
}
