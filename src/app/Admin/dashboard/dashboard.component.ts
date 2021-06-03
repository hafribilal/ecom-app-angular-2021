import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ArticleModule } from 'src/app/models/article/article.module';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';

const baseURL = "/articles";
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	selected!: ArticleModule;
	articles!: Array<ArticleModule>;
	private articlesSubscription: Subscription;
	images!: Array<string>;
	constructor(private api: ApiService, private common: CommonService) {
		this.articlesSubscription = this.common.getArticles().subscribe
			((articles) => {
				//articles contains the data sent from common service
				this.articles = articles;
			});
	}

	ngOnDestroy() {
		// It's a good practice to unsubscribe to ensure no memory leaks
		this.articlesSubscription.unsubscribe();
	}
	ngOnInit(): void {
		this.common.updateArticles();
	}


}
