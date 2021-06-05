import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ArticleModule } from 'src/app/models/article/article.module';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

const baseURL = "/articles";
@Component({
	selector: 'app-listarticles',
	templateUrl: './listarticles.component.html',
	styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent implements OnInit {

	//articles!: ArticleModule[];
	articles!: Array<ArticleModule>;
	images!: Array<string>;
	constructor(private api: ApiService, private common: CommonService) {
		this.articles = new Array();
		this.images = new Array();
	}

	ngOnInit(): void {
		this.images.push("assets/img/product1.jpg");
		//this.images.push("assets/img/product2.jpg");
		this.images.push("assets/img/product3.jpg");
		// setTimeout(() => {
		//
		// }, 300)
		this.getArticles();
		if (localStorage.getItem("USER_ROLE") === "USER") {
			this.common.updatePanier();
		}
	}


	async getArticles() {
		await this.api.getAll(baseURL + "/all").then(
			(articles) => {
				this.articles = articles;
			}
		).catch(
			(err) => {
				console.log(err);
			}
		);
	}

	getImage(index: number): void {
		if (!this.articles[index].thumbnail) {
			const random = Math.floor(Math.random() * this.images.length);
			this.articles[index].thumbnail = this.images[random];
		}
	}
}
