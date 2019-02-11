import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.scss']
})
export class ProjectBlockComponent implements OnInit {

  @Input() startDate: string;
  @Input() endDate: string;
  @Input() title: string;
  @Input() description: string;
  @Input() technologies: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
