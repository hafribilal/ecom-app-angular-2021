import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Compt } from '../models/compt/compt.module';
import { Client } from '../models/client/client.module';
import { Admin } from '../models/admin/admin.module';
import { IAuth } from './i-auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService implements IAuth {
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

	async login(username: string, password: string): Promise<boolean> {
		let OK = false;
		const url = `${environment.AUTH_URL}/login`;
		let body = {
			'username': username,
			'password': password
		}
		const options = { responseType: 'text' as 'json' };
		await this.http.post<any>(url, body, options).toPromise().then(token => {
			// store jwt token in local storage to keep user logged in between page refreshes
			if (token) {
				localStorage.setItem(environment.JWT, token);
				OK = true;
			}

		});
		return OK;
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(new Compt);
	}

	async adminSignUp(admin: Admin): Promise<Admin> {
		const url = `${environment.AUTH_URL}/admin/signup`;
		return this.http.post<Admin>(url, admin).toPromise().then(
			user => {
				return user;
			}
		);
	}

	async clientSignUp(client: Client): Promise<Client> {
		const url = `${environment.AUTH_URL}/client/signup`;
		return this.http.post<Client>(url, client).toPromise().then(
			user => {
				return user;
			}
		);
	}
}
