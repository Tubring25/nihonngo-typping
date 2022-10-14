import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Input() level: LEVEL_TYPE = 'N1'
  @Input() chapter: number = 1
  constructor() { }

  ngOnInit(): void {
  }

}
