import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ArticleModule } from 'src/app/models/article/article.module';
import { Observable } from 'rxjs';

const baseURL = "/articles";
@Component({
	selector: 'app-listarticles',
	templateUrl: './listarticles.component.html',
	styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent implements OnInit {

	//articles!: ArticleModule[];
	articles!: ArticleModule[];
	images!: Array<string>;
	constructor(private api: ApiService) {
		this.images = new Array();
	}

	ngOnInit(): void {

		this.images.push("assets/img/product1.jpg");
		//this.images.push("assets/img/product2.jpg");
		this.images.push("assets/img/product3.jpg");
		this.getArticles();
	}


	async getArticles() {
		this.articles = await this.api.getAll(baseURL + "/all");
		console.log(this.articles)
	}

	getImage(image: string): string {
		if (image) {
			return image;
		}
		const random = Math.floor(Math.random() * this.images.length);
		return this.images[random];
	}
}
