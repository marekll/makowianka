import { Component, OnInit, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { IArt } from '../art';
import { ArticleserService } from '../articleser.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  

  constructor() { }
  
  @Output() public childEvent = new EventEmitter();
   public pData:  IArt[];
   @Input("parentData") public articlesList:IArt[];
  public mobile:boolean = false;

  ngOnInit(): void {
    
  
  }
  
  fireEvent( art:number, selection:string){
    this.childEvent.emit([art,selection]);
  }
}
