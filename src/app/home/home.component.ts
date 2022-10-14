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
  ) { }

  ngOnInit(): void {
    this.wordService.initList()
    this.currentList = this.wordService.currentList
  }

  currentLevel: LEVEL_TYPE = 'N1'
  currentChapter: number = 1
  currentInd: number = 0
  currentList!: Word[];
}
