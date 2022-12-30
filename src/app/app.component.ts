import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'storybook';
  documents: any[];
  indicativos: any[];

  constructor() {
    this.documents = [
      {
        value: 'passport',
        label: 'Passport',
      },
      {
        value: 'citizenCard',
        label: 'Citizen Card',
      },
      {
        value: 'driversLicense',
        label: "Driver's License",
      },
    ];

    this.indicativos = [
      {
        value: 'pt',
        label: '+ 351',
        image: '../assets/flags/pt.svg',
      },
      {
        value: 'es',
        label: '+ 34',
        image: '../assets/flags/es.svg',
      },
      {
        value: 'uk',
        label: '+ 44',
        image: '../assets/flags/uk.svg',
      },
    ];
  }
}
