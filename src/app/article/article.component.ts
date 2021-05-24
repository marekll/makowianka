import { Component, OnInit, Input } from '@angular/core';
import { TxtParserService } from '../txt-parser.service';
import { IArt } from '../art'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  arttittle = "Makowianka"
  artt = "Artykuł"
  @Input('parentData') public artdata: IArt;
  pic_selected: string = "/assets/data/mlawa1.jpg";
  pic_show: boolean = true;
  constructor(private txtParserService: TxtParserService) { }
  

  ngOnInit(): void {
    this.txtParserService.getTxt("/assets/data/"+this.artdata.page+".txt").subscribe(data => this.artt = data);
  }
  click(evt) {
    const href = evt.target.getAttribute('href');
    if (href) {
       evt.preventDefault();
      
      this.pic_show = true;
       console.log(href);
       this.pic_selected = href;
    }
 }
 unclick(evt){
   this.pic_show = false;
 }
}
