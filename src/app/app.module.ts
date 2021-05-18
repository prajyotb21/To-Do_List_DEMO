import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { DispTodoComponent } from './MyComponents/disp-todo/disp-todo.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { ClgDetailComponent } from './MyComponents/clg-detail/clg-detail.component';
import { IntshipDetailComponent } from './MyComponents/intship-detail/intship-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DispTodoComponent,
    AddTodoComponent,
    AboutComponent,
    PageNotFoundComponent,
    ClgDetailComponent,
    IntshipDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
