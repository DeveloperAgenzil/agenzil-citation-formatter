import { Component } from '@angular/core';
import { Iitem } from './Interfaces/selection.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedItemId: number = 0;
  public citationString: string;
  public nameLabel: string = 'Name: ';

  public ResetSelectedItemId() {
    this.selectedItemId = 0;
  }

  public items: Array<Iitem> = [
    { id: 0, name: '' },
    { id: 1, name: 'YouTube video' },
    { id: 2, name: 'Book: no auth.' },
  ];

  public FormatCitationString(nameInput) {
    this.citationString = 'Copied: ' + nameInput.value;
  }
  public GetSelectedItemId() {
    if (this.selectedItemId == 1) {
      this.nameLabel = "Uploader's name: ";
    } else if (this.selectedItemId == 2) {
      this.nameLabel = "Author's name: ";
    }
    console.log(this.selectedItemId);
  }
  public FormatNameInput(event) {
    this.citationString = event.target.value;
  }
}
