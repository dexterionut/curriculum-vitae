import { Component, Input, OnInit } from '@angular/core';
import { ITextBlockWithDate } from '../../shared/models/text-block-with-date';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() education: ITextBlockWithDate[];

  constructor() {
  }

  ngOnInit() {
  }

}
