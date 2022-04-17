import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item'

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      Welcome to {{title}}!
    </h1>

    <app-list-manager></app-list-manager>
    <app-data-test></app-data-test>
  `,
  styleUrls: ['./app.component.scss']
})

// export - exposes code that can be imported
export class AppComponent {
  title = 'My Lovely Todo List APP';
}
