import {Component, OnInit} from '@angular/core';
import {Level, LevelService} from "../level.service";

@Component({
  selector: 'app-learn-objekt',
  templateUrl: './learn-objekt.component.html',
  styleUrls: ['./learn-objekt.component.css']
})
export class LearnObjektComponent implements OnInit {
  level?: Level;

  constructor(private levelService: LevelService) {
    this.levelService.indexLevel = "1";

  }

  load() {
    this.levelService.getLevel().subscribe(
      result => this.level = result
    );
  }

  ngOnInit(): void {
    this.load();
  }
}
