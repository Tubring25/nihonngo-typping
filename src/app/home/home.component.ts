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
        console.log('currentInd')
      } else {
        // TODO: 章节完成提示
        console.log('🎉 Chapter Finished!')
      }
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
