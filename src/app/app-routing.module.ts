import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeOverviewExample } from './comps/component1/component1.component';
import { Component2Component } from './comps/component2/component2.component';
import { Component3Component } from './comps/component3/component3.component';
import { InputNameComponent } from './comps/input-name/input-name.component';


const routes: Routes = [
  {
    path: '', component: Component2Component ,
    children: [
      {path: 'c1', component:BadgeOverviewExample},
      {path: 'c3',component :Component3Component},
      {path: 'inputName',component :InputNameComponent},
      { path:''  ,          redirectTo:'', pathMatch: 'full'},
      { path:'**',        redirectTo:'', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
