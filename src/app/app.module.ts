import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
/*import { AngularFontAwesomeModule} from 'angular-font-awesome';*/

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './pages/cart/cart.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './_helpers/interceptors/jwt.interceptor';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { ProductsListComponent } from './Pages/products-list/products-list.component';
import { ProductDetailsComponent } from './Pages/product-detail/product-details.component';
import { AboutComponent } from './Pages/about/about.component';
import { AdminSignupComponent } from './Pages/auth/admin-signup/admin-signup.component';
import { ClientSignupComponent } from './Pages/auth/client-signup/client-signup.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		AboutComponent,
		NotFoundComponent,
		LoginComponent,
		AdminSignupComponent,
		ClientSignupComponent,
		ForgotPasswordComponent,
		DashboardComponent,
		CreateProductComponent,
		ProductsListComponent,
		ProductDetailsComponent,
		CartComponent,
		CheckoutComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],
	providers: [
		[{
			provide: HTTP_INTERCEPTORS,
			useClass: JWTInterceptor,
			multi: true
		}],],
	bootstrap: [AppComponent,]
})
export class AppModule { }
