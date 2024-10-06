import { inRange, random, round } from 'lodash'

import { BOX_COUNT, LEVEL_COUNT, MAX_COLOR_DIFF, MIN_COLOR_DIFF } from './constants'
import { ColorQuestion } from './types'

const maybeNegative = (value: number) => (random(1) ? value : -value)

const generateColorDiff = (level: number) => {
  const diffPerLevel = (MAX_COLOR_DIFF - MIN_COLOR_DIFF) / (LEVEL_COUNT - 1)

  let diff = MAX_COLOR_DIFF - diffPerLevel * (level - 1)

  diff = round(diff, 1)

  return diff
}

export const generateQuestion = (level: number): ColorQuestion => {
  const isInRange = inRange(level, 1, LEVEL_COUNT + 1)

  if (!isInRange) {
    throw new Error(`Difficulty is ${level}, it must be between 1 and ${LEVEL_COUNT + 1}`)
  }

  const hue = random(359)
  const saturation = random(50, 100 - MAX_COLOR_DIFF / 2)
  const lightness = random(40, 90 - MAX_COLOR_DIFF / 2)

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  const totalDiff = generateColorDiff(level)

  // split the total difference between lightness and saturation
  const diffedLightness = lightness + maybeNegative(totalDiff / 2)
  const diffedSaturation = saturation + maybeNegative(totalDiff / 2)

  const differentColor = `hsl(${hue}, ${diffedSaturation}%, ${diffedLightness}%)`
  const differentIndex = random(BOX_COUNT - 1)

  return {
    color,
    differentColor,
    differentIndex,
    level,
  }
}
