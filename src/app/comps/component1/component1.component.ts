import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'badge-overview-example',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class BadgeOverviewExample implements OnInit {
    hidden = false;
    toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor() { }

  ngOnInit(): void {
  }

  }
