import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsearchComponent } from './csearch/csearch.component';
import { GsearchComponent } from './gsearch/gsearch.component';
import { IsearchComponent } from './isearch/isearch.component';
import { CoverviewComponent } from './coverview/coverview.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CsearchComponent},
  {path: 'glasssearch', component: GsearchComponent},
  {path: 'ingredientssearch', component: IsearchComponent},
  {path: 'c_overview/:id', component: CoverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
