import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  public golies: Player[];
  public defenders: Player[];
  public midfielders: Player[];
  public strikers: Player[];
  ngOnInit(): void {
    this.teamService.getGolies().subscribe(data => this.golies = data);
    this.teamService.getDefenders().subscribe(data => this.defenders = data);
    this.teamService.getMidfielders().subscribe(data => this.midfielders = data);
    this.teamService.getStrikers().subscribe(data => this.strikers = data);
  }
}
