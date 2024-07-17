import { Component } from '@angular/core';
import { Personal } from './myInterfaces/kaharkee';
import { Nation, Detailed } from './myInterfaces/continent';
import A4Json from '../assets/data/A4.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'A4kaharkee';

  personal: Personal = A4Json.personal;

  nation: Nation[] = A4Json.nationsFeatured;

  detail: Detailed[] = A4Json.artDetails;
}
