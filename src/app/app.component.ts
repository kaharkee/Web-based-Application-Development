import { Component } from '@angular/core';

import { Kaharkee } from './myClasses/kaharkee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kaharkeeA3';

  info: Kaharkee = {
    Fname: 'Harkeerat',
    Lname: 'Kaur',
    Sid: 991608248,
    Username: 'kaharkee',
    Progname: 'CP',
    Semail: 'kaharkee@sheridancollege.ca',
    Hcampus: 'Davis ',
    City: 'Brampton',
    Picname: 'AvatarMaker.png',
  };
}
