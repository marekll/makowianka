import { Component, OnInit, Input } from '@angular/core';
import {  TableService } from '../table.service';
import { SeasonTable } from '../season-table';
import { Week } from '../week';
import { Weeks } from '../weeks';

@Component({
  selector: 'app-season-table',
  templateUrl: './season-table.component.html',
  styleUrls: ['./season-table.component.css']
})
export class SeasonTableComponent implements OnInit {

  constructor(private tableService: TableService) { }
  public table: SeasonTable;
  public weeks: Weeks;
  @Input("parentData") public option:[string, boolean];

  ngOnInit(): void {
    this.tableService.getTable().subscribe(data => this.table = data);
    this.tableService.getWeeks().subscribe(data => this.weeks = data);
  }
  showTable():boolean{
    return this.option[0] != "nextWeek";
  }
  showEveryWeeks():boolean{
    return this.option[0] == "everything";
  }
  showOnlyLast():boolean{
    return this.option[0] == "nextWeek";
  }

}
