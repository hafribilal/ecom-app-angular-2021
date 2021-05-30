import { Injectable } from '@angular/core';

const AUTH_URL = "http://localhost:8080/ecom/auth";
const API_URL = "http://localhost:8080/ecom/api";

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor() { }
}
