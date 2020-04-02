import { Component, Input, OnInit } from '@angular/core';
import {ISkills} from '../../shared/models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: ISkills;

  constructor() {
  }

  ngOnInit() {
  }

}
