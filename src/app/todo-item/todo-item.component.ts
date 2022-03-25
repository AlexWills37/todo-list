import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">

      <input type="checkbox"
              class="todo-checkbox"
              (click)="completeItem()"
              [checked]="item.completed"/>

      <!-- ngClass is a quirky guy. It lets us assign class value(s) under different conditions. -->
      <!-- The value is "{ 'class1': condition, 'class2': condition, ... }" -->
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}"
        *ngIf="!editing"
        (dblclick)="editTitle()">
        {{ item.title }}
      </span>

      <!-- Editable title -->
      <app-input-button-unit *ngIf="editing"
        [title]="this.item.title"
        (submit)="submitTitle($event)"
      ></app-input-button-unit>


      <button class="btn"
        (click)="editTitle()">
        edit
      </button>

      <!-- That's right! you can have multiple classes in 1 component! -->
      <button class="btn btn-red"
            (click)="removeItem()">
            remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // @Input tells angular we can set this variable. It makes it accessible through property binding.
  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  editing: boolean = false;

  constructor() {   }

  ngOnInit(): void {
  }

  // Emit this item as a remove event
  removeItem(): void {
    this.remove.emit(this.item);
  }

  // Emit { item: item, changes: changes }, where changes just toggles item.completed
  completeItem(): void{
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed}
    });

  }

  editTitle(){
    this.editing = true;
  }

  submitTitle(newTitle: string){
    this.editing = false;
    this.item.title = newTitle;
  }
}
