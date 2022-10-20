import {Component, Inject, OnInit} from '@angular/core';
import { WordsService } from "../words.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private wordService: WordsService,
    public dialog: MatDialog
  ) {
    wordService.indChangeEvent.subscribe( () => {
      if(this.currentInd < this.wordService.perChapterNum - 1) {
        this.currentInd += 1
      } else {
        this.dialog.open(DialogChaptpterFinishedDialog, {
          data: {chapter: this.currentChapter}
        })
      }
    })
    wordService.listChangeEvent.subscribe(() => {
      this.currentList = this.wordService.currentList
      this.currentLevel = this.wordService.currentLevel
      this.currentChapter = this.wordService.currentChapter
      this.currentInd = 0
    })
  }

  ngOnInit(): void {
    this.wordService.initList()
    this.currentList = this.wordService.currentList
  }
  currentLevel: LEVEL_TYPE = 'N1'
  currentChapter: number = this.wordService.currentChapter
  currentInd: number = 0
  currentList!: Word[];
}

@Component({
  selector: 'dialog-chapter-finished-dialog',
  templateUrl: 'dialog-chapter-finished.html'
})
export class DialogChaptpterFinishedDialog {
  constructor(
    private wordService: WordsService,
    public dialogRef: MatDialogRef<DialogChaptpterFinishedDialog>,
    @Inject(MAT_DIALOG_DATA) private data: {chapter: number}
  ) {}
  dialogClose() {
    this.dialogRef.close()
  }
  nextChapter() {
    this.wordService.changeChapter(this.data.chapter + 1)
    this.wordService.listChangeEvent.emit(true)
    this.dialogClose()
  }
}

