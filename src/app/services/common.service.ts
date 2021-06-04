import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ArticleModule } from '../models/article/article.module';
import { Subject, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	panier = new Subject<number>();
	articles = new Subject<ArticleModule[]>();
	telecast = this.articles.asObservable();
	constructor(private api: ApiService, private auth: AuthService) { }

	updatePanier() {
		this.api.getOne('/panier/count').then(
			(count) => {
				this.panier.next(count);
			}
		).catch(
			(err) => {
				console.log(err.status);
			}
		);
	}

	updateArticles() {
		this.api.getOne('/articles/my').then(
			(articles) => {
				this.articles.next(articles);
			}
		).catch(
			(err) => {
				console.log(err.status);
			}
		);
	}

	getArticles() {
		return this.articles.asObservable();
	}

	getPanier() {
		return this.panier.asObservable();
	}
	refresh() {
		this.auth.load();
	}
}
