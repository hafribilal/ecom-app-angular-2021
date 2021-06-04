import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let permission: boolean = false;
		this.authService.isAdmin.subscribe(
			res => {
				permission = res;
				//console.log("permission : " + res)
				if (permission || localStorage.getItem("USER_TOKEN")) {
					if (localStorage.getItem("USER_ROLE") === "ADMIN") {
						permission = true;
					} else {
						this.navTo("shop");
					}
				} else {
					this.navTo("login");
				}
			}
		)
		return permission;
	}

	constructor(private authService: AuthService, private router: Router) { }

	navTo(to: string) {
		this.router.navigate(['/' + to]);
	}


}
