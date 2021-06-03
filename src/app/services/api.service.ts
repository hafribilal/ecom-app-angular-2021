import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IApi } from './i-api';

@Injectable({
	providedIn: 'root'
})
export class ApiService implements IApi {

	constructor(private http: HttpClient) { }

	async getAll(url: string) {
		return this.http.get<Array<any>>(environment.API_URL + url).toPromise();
	}

	async getOne(url: string) {
		return this.http.get<any>(environment.API_URL + url).toPromise();
	}

	async add(url: string, object: Object) {
		return this.http.post<Object>(environment.API_URL + url, object).toPromise();
	}

	async update(url: string, object: Object) {
		return this.http.put<Object>(environment.API_URL + url, object).toPromise();
	}

	async delete(url: string) {
		return this.http.delete<Object>(environment.API_URL + url).toPromise();
	}
}
