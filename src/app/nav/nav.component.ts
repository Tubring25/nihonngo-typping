import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LevelDialogComponent } from '../level-dialog/level-dialog.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Input() level: LEVEL_TYPE = 'N1'
  @Input() chapter: number = 1
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openLevelDialog() {
    this.dialog.open(LevelDialogComponent, {
      width: '60%'
    })
  }

}
