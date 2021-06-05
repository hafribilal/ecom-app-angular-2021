import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
/*import { AngularFontAwesomeModule} from 'angular-font-awesome';*/

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authn/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TopheaderComponent } from './pages/topheader/topheader.component';
import { ListarticlesComponent } from './pages/listarticles/listarticles.component';
import { ArticledetailComponent } from './pages/articledetail/articledetail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SignupComponent } from './Authn/signup/signup.component';
import { ChangepasswordComponent } from './Authn/changepassword/changepassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { Checkout2Component } from './pages/checkout2/checkout2.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCreateComponent } from './Admin/product-create/product-create.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './_helpers/interceptors/jwt.interceptor';
import { SignUpComponent } from './Admin/sign-up/sign-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HeaderComponent,
		FooterComponent,
		TopheaderComponent,
		ListarticlesComponent,
		ArticledetailComponent,
		CartComponent,
		AboutusComponent,
		SignupComponent,
		ChangepasswordComponent,
		CheckoutComponent,
		Checkout2Component,
		HomeComponent,
		DashboardComponent,
		ProductCreateComponent,
		SignUpComponent,
  NotFoundComponent
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
