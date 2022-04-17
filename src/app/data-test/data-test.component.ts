import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-data-test',
  template: `
    <p>
      data-test works!
    </p>
    <input
      [value]='this.thing'>

  `,
  styleUrls: ['./data-test.component.scss']
})


export class DataTestComponent implements OnInit {

  public thing;
  constructor(private databaseService: DatabaseService) {
    this.databaseService.testFetchGetData()
      .then((value: any) => {
        this.thing = value;
      },
      (response: any) => {
        this.thing = 'Error: ' + response;
      });
  }


  ngOnInit(): void {
  }

}
