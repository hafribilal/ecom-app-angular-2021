import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Compt } from '../models/compt/compt.module';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private currentUserSubject!: BehaviorSubject<Compt>;
	public currentUser!: Observable<Compt>;

	constructor(private http: HttpClient) {
		let currentUser = localStorage.getItem('currentUser');
		if (currentUser) {
			this.currentUserSubject = new BehaviorSubject<Compt>(JSON.parse(currentUser));
			this.currentUser = this.currentUserSubject.asObservable();
		}
	}

	public get currentUserValue(): Compt {
		return this.currentUserSubject.value;
	}

	login(username: string, password: string) {
		const url = `${environment.AUTH_URL}/login`;
		let body = {
			'username': username,
			'password': password
		}
		const options = { responseType: 'text' as 'json' };
		return this.http.post<any>(url, body, options).toPromise().then(token => {
			// store jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem(environment.JWT, token);
		})
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(new Compt);
	}
}
