import { Component } from '@angular/core';
import { DataJson }        from './json';

//import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `<h1> Table with the data:</h1> 
  <table class="pure-table pure-table-horizontal">
    <thead>
        <tr>
            <th>#</th>
            <th>Code 1</th>
            <th>Code 2</th>
            <th>Code 3</th>
            <th>Code 4</th>
            <th>Code 5</th>
            <th></th>
        </tr>
    </thead>

    <tbody>
        <tr *ngFor="let json of data_json">
            <td>{{json.id}}</td>
            <td><input [(ngModel)]="json.ghi" placeholder="def" /> </td>
            <td> <input [(ngModel)]="json.jkl" placeholder="def" /> </td> 
            <td></td>
            <td></td>
            <td><input type="checkbox" [(ngModel)]="json.def"/></td> 
            <td> <button (click)="update(json)">Save</button> </td>         
        </tr>
    </tbody>
</table>

<td> <button (click)="newDataJson()">New Entry</button> </td> 
<hr>
<b>debug:</b>
<br>

<div *ngIf="selectedJson">
Selected Json: 
<br>
<b> id: </b>{{selectedJson.id}}
<br>
<b> jkl: </b>{{selectedJson.jkl}}
</div>
  `,
})
export class AppComponent  { 
    json: DataJson;
    selectedJson: DataJson;
    data_json: Array<DataJson>;


  constructor() {
    this.data_json = [
    new DataJson(1, true, "", "M,NO,PQ,M,ST"),
    new DataJson(2, false, "", "M,NO,PQ,A,ST")
];
  }

  update(json: any): void {
      //Send this JSON to http server.
      this.selectedJson = json;
      console.log(json);
  }

  newDataJson(): void {
      this.data_json.push(new DataJson(0, false, "", ""));
  }
}
