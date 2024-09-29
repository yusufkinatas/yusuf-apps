import { inRange, random } from 'lodash'

import { BOX_COUNT, DIFF_PER_DIFFICULTY, MAX_DIFFICULTY } from './constants'
import { ColorQuestion } from './types'

const maybeNegative = (value: number) => (random(1) ? value : -value)

const maxPossibleIncrease = MAX_DIFFICULTY * DIFF_PER_DIFFICULTY

export const generateQuestion = (difficulty: number): ColorQuestion => {
  if (!inRange(difficulty, 1, MAX_DIFFICULTY + 1)) {
    throw new Error(
      `Difficulty is ${difficulty}, it must be between 1 and ${MAX_DIFFICULTY + 1}`
    )
  }

  const hue = random(359)
  const saturation = random(50, 100 - maxPossibleIncrease)
  const lightness = random(40, 100 - maxPossibleIncrease)

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  const totalDiff = maxPossibleIncrease - (difficulty - 1) * DIFF_PER_DIFFICULTY

  // split the total difference between lightness and saturation
  const diffedLightness = lightness + maybeNegative(totalDiff / 2)
  const diffedSaturation = saturation + maybeNegative(totalDiff / 2)

  const differentColor = `hsl(${hue}, ${diffedSaturation}%, ${diffedLightness}%)`
  const differentIndex = random(BOX_COUNT - 1)

  return {
    difficulty,
    color,
    differentColor,
    differentIndex,
  }
}
