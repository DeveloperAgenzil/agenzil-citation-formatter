import { Component } from '@angular/core';
import { Iitem } from './selection.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedItem: number;

  public items: Array<Iitem> = [
    { id: 1, name: 'YouTube video' },
    { id: 2, name: 'Book: no auth.' },
  ];
}
