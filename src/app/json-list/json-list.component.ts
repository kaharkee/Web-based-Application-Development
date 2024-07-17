import { Component, OnInit, Input } from '@angular/core';
import { Nation, Detailed } from '../myInterfaces/continent';
@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.css'],
})
export class JsonListComponent implements OnInit {
  @Input() nationList!: Nation[];
  @Input() detailedList!: Detailed[];

  constructor() {}
  ngOnInit(): void {}
}
