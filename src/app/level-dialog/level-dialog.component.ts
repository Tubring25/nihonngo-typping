import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { WordsService } from "../words.service";

@Component({
  selector: 'app-level-dialog',
  templateUrl: './level-dialog.component.html',
  styleUrls: ['./level-dialog.component.sass']
})
export class LevelDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LevelDialogComponent>,
    private wordService: WordsService
  ) {}

  ngOnInit(): void {

  }
  LevelList: LEVEL_TYPE[] = ['N1', "N2", "N3", "N4N5"]
  selectedLevel: LEVEL_TYPE = this.wordService.currentLevel
  selectLevel(level: LEVEL_TYPE) : void {
    this.selectedLevel = this.wordService.changeLevel(level)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
