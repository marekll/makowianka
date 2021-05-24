import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { ArticleserService} from './articleser.service'
import { IArt } from './art';
import { Sponsor } from './sponsor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private txtParserService: ArticleserService) { }
  title = 'makkow';
  current_art='0';
  list_visible:boolean = false;
  mobile:boolean = false;
  public articles_list:IArt[];
  public pics_list:string[];
  public sponsors_list:Sponsor[]= [
    {image:'netbis.png', name:'NETBIS', page:'http://www.netbis.pl/'},
    {image:'jol-met.png', name:'JOL-MET', page:'http://www.jol-met.com.pl/'} ,
    {image:'drewmak.png', name:'DrewMak', page:'https://drewmak.pl/'},
    {image:'adal.jpg', name:'ADAL', page:'http://adal.zmakowa.pl/'},
    {image:'hubtrans.png', name:'Usługi Transportowe Hub-Trans Michał Deptuła', page:'https://www.google.com/search?q=Us%C5%82ugi+Transportowe+Hub-Trans+Micha%C5%82+Deptu%C5%82a&oq=Us&aqs=chrome.1.69i60j69i59l2j69i57j0j69i60l3.4049j0j7&sourceid=chrome&ie=UTF-8'}];
  
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.mobile = window.innerWidth < 700 || window.innerHeight < 400;

    this.txtParserService.getIArt().subscribe(data => this.articles_list= data)
    this.txtParserService.getPics().subscribe(data => this.pics_list= data)
    
  }
  
  onResize(event) {
    this.mobile = window.innerWidth < 700 || window.innerHeight < 400;
  }
}
