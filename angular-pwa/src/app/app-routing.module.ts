import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsearchComponent } from './csearch/csearch.component';
import { GsearchComponent } from './gsearch/gsearch.component';
import { IsearchComponent } from './isearch/isearch.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CsearchComponent},
  {path: 'glasssearch', component: GsearchComponent},
  {path: 'ingredientssearch', component: IsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
