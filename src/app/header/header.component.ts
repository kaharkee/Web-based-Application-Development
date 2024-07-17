import { Component, OnInit, Input } from '@angular/core';
import { Kaharkee } from '../myClasses/kaharkee';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() headerInfo!: Kaharkee;

  constructor() {}

  ngOnInit(): void {}
}
