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
	prix!: number;
	type!: string;
	stock!: number;
	thumbnail!: string;
	vendeur!: Admin;
}
