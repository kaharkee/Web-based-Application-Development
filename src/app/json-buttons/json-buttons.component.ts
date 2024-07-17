import { Component, OnInit, Input } from '@angular/core';
import { Nation, Detailed } from '../myInterfaces/continent';

@Component({
  selector: 'app-json-buttons',
  templateUrl: './json-buttons.component.html',
  styleUrls: ['./json-buttons.component.css'],
})
export class JsonButtonsComponent implements OnInit {
  @Input() nationList!: Nation[];
  @Input() detailedList!: Detailed[];

  outResult!: string;

  Info(s: string) {
    this.outResult = `
    
    `;

    for (let d of this.detailedList) {
      if (d.nation === s) {
        this.outResult += `
        
        <h5><b>Nation Selected:</b>${d.nation}</h5> 
        <h5>Title :  ${d.title} / <b>Nation:</b>${d.nation}</h5>
        <h5 ><b>Description :</b> ${d.description}</h5>
        <h5><b>Technique : </b>${d.technique}</h5>
         <hr>
        
        
      `;
      }
    }
  }
  constructor() {}
  ngOnInit(): void {}
}
