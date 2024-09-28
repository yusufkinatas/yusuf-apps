import { inRange, random } from 'lodash'

import { BOX_COUNT } from './constants'
import { ColorQuestion } from './types'

const maybeNegative = (value: number) => (random(1) ? value : -value)

export const generateQuestion = (difficulty: number): ColorQuestion => {
  if (!inRange(difficulty, 10)) {
    throw new Error('Difficulty must be between 0 and 9')
  }

  const hue = random(359)
  const saturation = random(50, 80)
  const lightness = random(40, 80)
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  const diff = 10 - difficulty

  const diffedLightness = lightness + maybeNegative(diff)
  const diffedSaturation = saturation + maybeNegative(diff)

  const differentColor = `hsl(${hue}, ${diffedSaturation}%, ${diffedLightness}%)`
  const differentIndex = random(BOX_COUNT - 1)

  return {
    difficulty,
    color,
    differentColor,
    differentIndex,
  }
}
