import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  template: `
    <p>
      fetch works!
    </p>
  `,
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
