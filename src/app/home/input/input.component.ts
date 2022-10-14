import {Component, OnInit, Input } from '@angular/core';
import { WordsService } from "../../words.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Input() word!: Word
  constructor(
    private wordService: WordsService
  ) { }

  ngOnInit(): void {
  }
  _iptVal: string = ''
  get iptVal() {
    return this._iptVal
  }
  set iptVal(val:string) {
    this.diffInds.clear()
    this.diffWord(val, this.word.hiragana)
    this._iptVal = val
  }
  diffInds: Map<any, any> = new Map()
  diffWord(input: string, standard: string) {
    for(let i = 0; i < standard.length; i++) {
      if(input[i] && input[i] != standard[i]){
        if(!this.diffInds.has(i)) {
          this.diffInds.set(i, i)
        }
      }
    }
    this.wordService.wordChangeEvent.emit(Array.from(this.diffInds.values()))
  }
}
