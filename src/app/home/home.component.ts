import { Component, OnInit } from '@angular/core';
import { WordsService } from "../words.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private wordService: WordsService
  ) {
    wordService.indChangeEvent.subscribe( () => {
      if(this.currentInd < this.wordService.perChapterNum - 1) {
        this.currentInd += 1
      } else {
        // TODO: 章节完成提示
        console.log('🎉 Chapter Finished!')
      }
    })
    wordService.listChangeEvent.subscribe(() => {
      this.currentList = this.wordService.currentList
      this.currentLevel = this.wordService.currentLevel
      this.currentChapter = this.wordService.currentChapter
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
