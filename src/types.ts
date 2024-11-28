/**
 * Represents a map of word sets.
 *
 * Each key in the map corresponds to a set of words.
 *
 * @interface WordsMap
 */
export interface WordsMap {
  [key: number]: TypedWord[]
}

/**
 * Represents a word
 *
 * @interface Word
 */
export interface Word {
  name: string
}

/**
 * Represents a word with a type
 *
 * @interface TypedWord
 */
export interface TypedWord extends Word {
  type: number
}
