import { Component } from '@angular/core';
import { Iitem } from './Interfaces/selection.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedItemId: number = 0;

  public ResetSelectedItemId() {
    this.selectedItemId = 0;
  }

  public items: Array<Iitem> = [
    { id: 0, name: '' },
    { id: 1, name: 'YouTube video' },
    { id: 2, name: 'Book: no auth.' },
  ];

  public GetSelectedItemId() {
    console.log(this.selectedItemId);
  }
  public FormatNameInput(event) {
    console.log(event.target.value);
  }
}
