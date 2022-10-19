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
  levelStyle: object = {
    width: '8rem',
    height: '4rem',
    lineHeight: '4rem',
    fontSize: '2rem',
  }
  LevelList: LEVEL_TYPE[] = this.wordService.getLevelList()
  selectedLevel: LEVEL_TYPE = this.wordService.currentLevel
  selectLevel(level: LEVEL_TYPE) : void {
    this.selectedLevel = level
  }

  chapterList: number[] = this.wordService.getChapterList()
  selectedChapter: number = this.wordService.currentChapter
  selectChapter(chapter: number) : void {
    this.selectedChapter = chapter
  }
  chapterStyle: object = {
    width: '4rem',
    height: '2rem',
    lineHeight: '2rem',
    fontSize: '1rem',
  }

  onNoClick(): void {
    this.wordService.changeLevel(this.selectedLevel)
    this.wordService.changeChapter(this.selectedChapter)
    this.wordService.listChangeEvent.emit(true)
    this.dialogRef.close();
  }
}
