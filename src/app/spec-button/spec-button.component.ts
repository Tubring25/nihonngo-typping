import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spec-button',
  templateUrl: './spec-button.component.html',
  styleUrls: ['./spec-button.component.sass']
})
export class SpecButtonComponent implements OnInit {
  @Input() buttonName: string = 'Button'
  @Input() isDisabled: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
