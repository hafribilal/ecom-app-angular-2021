import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './_helpers/guards/auth.guard';
import { ClientGuard } from './_helpers/guards/client.guard';
import { AdminGuard } from './_helpers/guards/admin.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ClientSignupComponent } from './Pages/auth/client-signup/client-signup.component';
import { AdminSignupComponent } from './Pages/auth/admin-signup/admin-signup.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProductsListComponent } from './Pages/products-list/products-list.component';
import { ProductDetailsComponent } from './Pages/product-detail/product-details.component';

const routes: Routes = [

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'client/signup', component: ClientSignupComponent },
	{ path: 'admin/signup', component: AdminSignupComponent },
	{ path: 'changepassword', component: ForgotPasswordComponent, canActivate: [AuthGuard] },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
	{ path: 'shop', component: ProductsListComponent, canActivate: [AuthGuard] },
	{ path: 'productdetail/:id', component: ProductDetailsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
	{ path: 'cart', component: CartComponent, canActivate: [ClientGuard] },
	{ path: 'checkout', component: CheckoutComponent, canActivate: [ClientGuard] },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
