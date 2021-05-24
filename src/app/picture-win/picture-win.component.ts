import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-win',
  templateUrl: './picture-win.component.html',
  styleUrls: ['./picture-win.component.css']
})
export class PictureWinComponent implements OnInit {

  constructor() { }
  @Input() public source:string;
  ngOnInit(): void {
  }

}
