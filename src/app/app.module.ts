import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { FetchComponent } from './fetch/fetch.component';
import { DataTestComponent } from './data-test/data-test.component';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    FetchComponent,
    DataTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TodoListService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
