import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*import { AngularFontAwesomeModule} from 'angular-font-awesome';*/


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
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { Checkout2Component } from './pages/checkout2/checkout2.component';
import { HomeComponent } from './pages/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
