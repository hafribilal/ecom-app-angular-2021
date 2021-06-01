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

const routes: Routes = [

{path : '' ,redirectTo : '/home', pathMatch : 'full'},
{path : 'home' ,component : HomeComponent},
{path : 'login'  ,component : LoginComponent/*, outlet : "contenu"*/},
{path : 'signup'   ,component : SignupComponent/*, outlet : "contenu"*/},
{path : 'shop'   ,component : ListarticlesComponent/*, outlet : "autre"*/},
{path : 'cart'     ,component : CartComponent},
{path : 'changepassword'     ,component : ChangepasswordComponent},
{path : 'checkout'     ,component : CheckoutComponent},
{path : 'productdetail'     ,component : ArticledetailComponent},
{path : 'dashboard'     ,component : DashboardComponent},
{path : 'AdminSignUp'     ,component : SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
