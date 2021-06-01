import { Injectable } from '@angular/core';
import { Compt } from '../models/compt/compt.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IApi } from './i-api';
import { ArticleModule } from '../models/article/article.module';

@Injectable({
	providedIn: 'root'
})
export class ApiService implements IApi {

	constructor(private http: HttpClient) { }

	async getAllArticles(url: string) {
		return this.http.get<ArticleModule[]>(environment.API_URL + url).toPromise();
	}
}
