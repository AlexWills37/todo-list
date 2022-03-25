import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

// We are going to save all of the list items
const defaultTodoList: TodoItem[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoItem[];


  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem): void {
    // Add to the runtime instance
    this.todoList.push(item);

    // Store list in storage
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  updateItem(item: TodoItem, changes): void {

    // Find where the list item is
    const index = this.todoList.indexOf(item);

    // ... spread operator!
    // make a new object, with all the key/values of item
    // Override / add to this object the key/values of changes
    this.todoList[index] = { ...item, ...changes };

    // Update the local storage
    this.saveList();
  }

  private saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }


  deleteItem(item: TodoItem): void {

    // Find the item
    const index = this.todoList.indexOf(item);
    // Remove it from the array
    this.todoList.splice(index, 1);

    // Save the list
    this.saveList();
  }
}
