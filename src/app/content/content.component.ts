import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Kaharkee } from '../myClasses/kaharkee';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  pdate = new Date();
  SheridanProgram: string = 'CP';

  @ViewChild('identity') image: any;
  @Input() contentInfo!: Kaharkee;
  constructor() {}

  ngOnInit(): void {}
  load(event: any) {
    if (event === 'rotated') {
      this.image.nativeElement.classList.add('reflex');
    } else {
      this.image.nativeElement.classList.remove('reflex');
    }
  }
  dawn(event: any) {
    console.log('Image clicked');
    event.target.style.scale = 0.5;
  }
}
