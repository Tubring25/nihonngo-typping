declare type LEVEL_TYPE = 'N1' | 'N2' | 'N3' | 'N4N5'

declare interface Word {
  wordName: string,
  correctDesc: string,
  level: LEVEL_TYPE,
  hiragana: string
  romaji?: string
}
