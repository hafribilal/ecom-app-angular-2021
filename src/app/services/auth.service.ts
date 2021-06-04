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
	private loggedIn = new BehaviorSubject<boolean>(false);
	private admin = new BehaviorSubject<boolean>(false);
	private client = new BehaviorSubject<boolean>(false);

	private currentUserSubject!: BehaviorSubject<Compt>;
	public currentUser!: Observable<Compt>;

	constructor(private http: HttpClient) {
		let currentUser = localStorage.getItem('currentUser');
		if (currentUser) {
			this.currentUserSubject = new BehaviorSubject<Compt>(JSON.parse(currentUser));
			this.currentUser = this.currentUserSubject.asObservable();
		}
	}

	get isLoggedIn() {
		// let admin: boolean = false;
		// let client: boolean = false;
		// this.isAdmin.subscribe(isAdmin => {
		// 	this.admin.next(isAdmin);
		// });
		// this.isClient.subscribe(isClient => {
		// 	this.client.next(isClient);
		// });
		// if (this.admin || this.client) {
		// 	this.loggedIn.next(true);
		// }
		return this.loggedIn.asObservable();
	}

	get isAdmin() {
		//this.load();
		return this.admin.asObservable();
	}

	get isClient() {
		//this.load();
		return this.client.asObservable();
	}

	public get currentUserValue(): Compt {
		return this.currentUserSubject.value;
	}

	async login(username: string, password: string): Promise<boolean> {
		this.loggedIn.next(false);
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
				this.loggedIn.next(true);
				console.log(this.isLoggedIn);
				this.load();
			}

		});
		return this.loggedIn.value;
	}

	load() {
		this.http.get(environment.AUTH_URL + "/").toPromise().catch(
			res => {
				this.loggedIn.next(true);
				if (res.error.text === "[ROLE_ADMIN]") {
					//console.log("ADMIN Login");
					this.admin.next(true);
					localStorage.setItem("USER_ROLE", "ADMIN")
				} else if (res.error.text === "[ROLE_USER]") {
					//console.log("CLINET Login")
					this.client.next(true);
					localStorage.setItem("USER_ROLE", "USER")
				}
			}
		);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('USER_ROLE');
		localStorage.removeItem('USER_TOKEN');
		//this.currentUserSubject.next(new Compt);
		this.loggedIn.next(false);
		window.location.reload();
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
