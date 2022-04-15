import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `


    <!-- this input loses the dynamic binding for value -->
    <!-- <input value="hello world"> -->

    <!-- You can bind to a method as well -->
    <!-- <input [value]="generateTitle()"> -->

    <!-- This input uses angular's property binding. [value] property is bound to the expression title -->
    <!-- title is just the title member variable -->
    <!-- Angular is smart, and only activates this binding to update the property, when the value changes -->
    <!-- keyup - when a key is released -->
    <!-- # - Angular stores this html element in the variable inputElementRef -->
    <!-- submitValue($event.target.value) -->
    <input class="todo-input"
           #inputElementRef
           [value]="title"
           (keyup.enter)="submitValueFromTarget($event.target)">
    <!-- $event - the event being triggered -->
    <!-- .target - the source of the event -->

    <!-- in angular, you remove "on" from events to bind them -->
    <!-- the value is the method to execute when the event happens -->
    <button class="btn"
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})


export class InputButtonUnitComponent implements OnInit {

  // Members (fields)
  @Input() title = "Hello World!";

  // EventEmiiter has .emit();. string is the type that will be emitted.
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

   }

  ngOnInit(): void {

    // setTimeout does a method after the specified milliseconds (method, milliseconds);
    // setTimeout(() => {
    //   this.title = 'This is not the title you are looking for';
    // }, 3000);
  }

  // // newTitle is parameter. TypeScript requires us to specify the type
  // changeTitle(newTitle: string){
  //   this.title = newTitle;
  //   console.log("title: " + this.title);
  // }

  submitValue(newTitle: string){
    this.submit.emit(newTitle);
  }

  submitValueFromTarget(newTitle: EventTarget){
    this.submit.emit((newTitle as HTMLInputElement).value);
  }

  setTitle(newTitle: string){
    this.title = newTitle;
  }

  generateTitle(){
    return "Generated Title";
  }

}
