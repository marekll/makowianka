import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleserService } from '../articleser.service'
import { IArt } from '../art';


@Component({
  selector: 'app-article-box',
  templateUrl: './article-box.component.html',
  styleUrls: ['./article-box.component.css']
})
export class ArticleBoxComponent implements OnInit {
  
  constructor() { }
  
  @Input("parentData") public artdata:IArt;
  @Input("type") public type = "normal";
  @Output() public childEvent = new EventEmitter();
  public mText:string;
  
  ngOnInit(): void {
    
  }
  fireEvent(){
    this.childEvent.emit(this.artdata.page)
  }
  addmText(){
    this.mText = this.artdata.mtext;
  }
  delmText(){
    this.mText = "";
  }
  

}
