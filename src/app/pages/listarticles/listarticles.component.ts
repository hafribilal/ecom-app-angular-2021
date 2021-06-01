import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ArticleModule } from 'src/app/models/article/article.module';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-listarticles',
	templateUrl: './listarticles.component.html',
	styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent implements OnInit {

	//articles!: ArticleModule[];
	articles!: ArticleModule[];

	constructor(private api: ApiService) { }

	ngOnInit(): void {
		this.test();
	}

	async test() {
		this.articles = await this.api.getAllArticles("/articles/all");
		console.log(this.articles)
	}
}
