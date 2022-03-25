import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item'
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `


  <div class="todo-app">

    <!-- Event listener! We bind the submit output event to a method -->
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">

      <!-- $event is a reference to whatever the event emits! -->
        <app-todo-item [item]="todoItem"
                       (remove)="removeItem($event)"
                       (update)="updateItem($event.item, $event.changes)">  </app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {


  title = 'todo-list';
  todoList: TodoItem[];

  // Dependency Injecction!!!!
  // just pass the service class as a parameter
  // SHORTHAND ALERT: by putting an access modifier before the parameter, it is automatically stored
  //  as a member variable with the specified access modifier and the same name
  constructor(private todoListService: TodoListService) {

  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  // addItem(title: string) {
    //   this.todoList.push({ title });
    // }

  addItem(title: string): void {
    // This is shorthand! because the property [title] has the same name as the variable we are passing its value from
    this.todoListService.addItem({ title });
  }

  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }
}
