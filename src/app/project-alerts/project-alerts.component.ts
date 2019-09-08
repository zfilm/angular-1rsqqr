import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-alerts',
  templateUrl: './project-alerts.component.html',
  styleUrls: ['./project-alerts.component.css']
})
export class ProjectAlertsComponent implements OnInit {
  @Input() project;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}