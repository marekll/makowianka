import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-box',
  templateUrl: './picture-box.component.html',
  styleUrls: ['./picture-box.component.css']
})
export class PictureBoxComponent implements OnInit {

  constructor() { }
  @Input("parentData") path:string; 
  
  ngOnInit(): void {
  }
}
