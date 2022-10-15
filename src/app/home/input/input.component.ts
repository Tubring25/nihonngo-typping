import {Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { WordsService } from "../../words.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Input() word!: Word
  constructor(
    private wordService: WordsService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  _iptVal: string = ''
  get iptVal() {
    return this._iptVal
  }
  set iptVal(val:string) {
    this.diffInds.clear()
    if(val === this.word.hiragana　|| val === this.word.wordName) {
      this.wordService.indChangeEvent.emit(true)
    }　else {
      this._iptVal = val
      this.diffWord(val, this.word.hiragana)
    }
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

  ngOnChanges() {
    // FIXME: 单词整体输入时，需要手动清除输入框中的文字
    this._iptVal = ''
    this.changeDetector.markForCheck()
    this.changeDetector.detectChanges()
  }


}
