import { Component, Input, OnInit } from '@angular/core';
import { IPersonalInfo } from '../../shared/models/personal-info';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Input() personalInfo: IPersonalInfo;

  constructor() {
  }

  ngOnInit() {
  }

}
