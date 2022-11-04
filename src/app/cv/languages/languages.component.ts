import { Component, Input, OnInit } from '@angular/core';
import {ILanguage} from '../../shared/models/language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  @Input() languages: ILanguage[];

  constructor() {
  }

  ngOnInit() {
  }

}
