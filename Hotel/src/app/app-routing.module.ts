import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"",component: LoginComponent},
{path:"menu",component: MenuComponent,children:[ {path:"home",component: HomeComponent},
{path:"home",component: HomeComponent},
]

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
