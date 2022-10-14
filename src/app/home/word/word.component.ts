import {Component, Input, OnInit} from '@angular/core';
import { WordsService } from "../../words.service";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.sass']
})
export class WordComponent implements OnInit {
  @Input() word!: Word
  constructor(
    private wordService: WordsService
  ) {
    wordService.wordChangeEvent.subscribe((inds) => {
      this.diffInds = inds
    })
  }
  diffInds: number[] = []
  ngOnInit() {
  }

}
