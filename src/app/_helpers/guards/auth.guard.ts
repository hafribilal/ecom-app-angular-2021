import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let permission: boolean = false;
		this.authService.isLoggedIn.subscribe(
			res => {
				permission = res;
				//console.log("permission : " + res)
				if (permission || localStorage.getItem("USER_TOKEN")) {
					permission = true;
				} else {
					this.login();
				}
			}
		)
		return permission;
		// .pipe(take(1),
		// 	map((isLoggedIn: boolean) => {
		// 		if (!isLoggedIn) {
		// 			this.router.navigate(['/login']);
		// 			return false;
		// 		}
		// 		console.log("is Logged-in " + isLoggedIn);
		// 		return true;
		// 	})
		// )
	}

	constructor(private authService: AuthService, private router: Router) { }

	login() {
		this.router.navigate(['/login']);
	}

}
