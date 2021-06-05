import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { SignUpComponent } from './Admin/sign-up/sign-up.component';
import { ChangepasswordComponent } from './Authn/changepassword/changepassword.component';
import { LoginComponent } from './Authn/login/login.component';
import { SignupComponent } from './Authn/signup/signup.component';
import { ArticledetailComponent } from './pages/articledetail/articledetail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarticlesComponent } from './pages/listarticles/listarticles.component';
import { AuthGuard } from './_helpers/guards/auth.guard';
import { ClientGuard } from './_helpers/guards/client.guard';
import { AdminGuard } from './_helpers/guards/admin.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'client/signup', component: SignupComponent },
	{ path: 'admin/signup', component: SignUpComponent },
	{ path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard] },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
	{ path: 'shop', component: ListarticlesComponent, canActivate: [AuthGuard] },
	{ path: 'productdetail/:id', component: ArticledetailComponent, pathMatch: 'full', canActivate: [AuthGuard] },
	{ path: 'cart', component: CartComponent, canActivate: [ClientGuard] },
	{ path: 'checkout', component: CheckoutComponent, canActivate: [ClientGuard] },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
