import { Component, OnInit, Input } from '@angular/core';
import { Personal } from '../myInterfaces/kaharkee';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() personal!: Personal;

  constructor(public dialog: MatDialog) {}
  aboutMe() {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      data: this.personal,
      width: '400px',
    });
  }
  ngOnInit() {}
}
