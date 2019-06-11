import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [{path:"",component:MenuComponent},
{path:"home",component:HomeComponent}, 
{path:"education",component:EducationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
