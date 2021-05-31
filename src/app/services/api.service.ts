import { Injectable } from '@angular/core';
import { Compt } from '../models/compt/compt.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IApi } from './i-api';

@Injectable({
	providedIn: 'root'
})
export class ApiService implements IApi {

	constructor(private http: HttpClient) { }

	async getAll(url: string) {
		return this.http.get(environment.API_URL + url).toPromise();
	}
}
