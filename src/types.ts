/**
 * Represents a map of word sets.
 *
 * Each key in the map corresponds to a set of words.
 *
 * @interface WordsMap
 */
export interface WordsMap {
  [key: number]: Word[]
}

/**
 * Represents a word object
 *
 * @interface Word
 */
export interface Word {
  name: string
}
