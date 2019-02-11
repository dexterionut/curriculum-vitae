import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-block-with-date',
  templateUrl: './text-block-with-date.component.html',
  styleUrls: ['./text-block-with-date.component.scss']
})
export class TextBlockWithDateComponent implements OnInit {

  @Input() startDate: string;
  @Input() endDate: string;
  @Input() title: string;
  @Input() contentLines: string[];

  constructor() { }

  ngOnInit() {
  }

}
