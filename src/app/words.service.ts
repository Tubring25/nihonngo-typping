import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor() { }
  private allList: Word[] = []
  public perChapterNum: number = 3
  public currentLevel: LEVEL_TYPE = 'N1'
  public currentChapter: number = 1

  wordChangeEvent: EventEmitter<number[]> = new EventEmitter()
  indChangeEvent: EventEmitter<boolean> = new EventEmitter()

  initList() {
    this.allList = require(`../assets/${this.currentLevel.toLowerCase()}/${this.currentChapter}.json`).data.map((item: any) => {
      const { wordName, wordDesc,correctDesc } = item
      const res = wordDesc.match(/^\（(.+?)\）/)
      const hiragana = res && !res[1].match(/[a-zA-Z]/) ? res[1] : wordName
      return {
        wordName,
        correctDesc,
        level: this.currentLevel,
        hiragana,
      }
    })
  }

  get currentList(): Word[] {
    return this.allList.slice((this.currentChapter - 1) * this.perChapterNum, this.currentChapter * this.perChapterNum)
  }

  getLevelList(): LEVEL_TYPE[] {
    return ['N1' , 'N2' , 'N3' , 'N4N5']
  }

  changeLevel(level: LEVEL_TYPE): Word[]{
    this.currentLevel = level
    this.currentChapter = 1
    return this.currentList
  }

  changeChapter(chapter: number): Word[]{
    this.currentChapter = chapter
    return this.currentList
  }
}
