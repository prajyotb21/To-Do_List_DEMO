import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ClgDetailComponent } from './MyComponents/clg-detail/clg-detail.component';
import { IntshipDetailComponent } from './MyComponents/intship-detail/intship-detail.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent,
children: [
  {path: 'clg', component: ClgDetailComponent},
  {path: 'intship', component: IntshipDetailComponent},
]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
