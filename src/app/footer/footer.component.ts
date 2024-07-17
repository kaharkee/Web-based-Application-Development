import { Component, OnInit, Input } from '@angular/core';
import { Kaharkee } from '../myClasses/kaharkee';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() footerInfo!: Kaharkee;
  constructor() {}

  ngOnInit(): void {}
}
