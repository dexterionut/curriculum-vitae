import { Component, Input, OnInit } from '@angular/core';
import { ITextBlock } from '../../shared/models/text-block';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: ITextBlock[];

  constructor() {
  }

  ngOnInit() {
  }

}
