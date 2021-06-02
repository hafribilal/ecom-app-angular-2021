import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ArticleModule } from 'src/app/models/article/article.module';

const baseURL = "/articles";
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	selected!: ArticleModule;
	articles!: ArticleModule[];
	images!: Array<string>;
	constructor(private api: ApiService) { }

	ngOnInit(): void {
		this.getArticles();
	}

	async getArticles() {
		this.articles = await this.api.getAll(baseURL + "/my");
		console.log(this.articles)
	}


}
