import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ITextBlock } from '../../shared/models/text-block';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: ITextBlock[];

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
  }

  ngOnInit() {
  }

}
