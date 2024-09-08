import { inRange, random, times } from 'lodash'
import { useState } from 'react'

import { BOX_COUNT } from './color-finder/contants'
import { QuestionBox } from './color-finder/question-box'
import { ColorQuestion } from './color-finder/types'

const generateQuestion = (difficulty: number): ColorQuestion => {
  if (!inRange(difficulty, 10)) {
    throw new Error('Difficulty must be between 0 and 9')
  }

  const hue = random(359)
  const saturation = random(50, 100)
  const lightness = random(50, 80)
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  let lightnessDiff = 20 - difficulty * 2

  if (random(1)) {
    lightnessDiff *= -1
  }

  const differentColor = `hsl(${hue}, ${saturation}%, ${lightness + lightnessDiff}%)`
  const differentIndex = random(BOX_COUNT - 1)

  return {
    difficulty,
    color,
    differentColor,
    differentIndex,
  }
}

export const ColorFinder = () => {
  const [question, setQuestion] = useState(generateQuestion(0))
  const [remainingLives, setRemainingLives] = useState(3)

  const handleAnswer = (isCorrect: boolean) => {
    if (!isCorrect) {
      if (remainingLives === 1) {
        return alert('Game over!')
      }

      return setRemainingLives(remainingLives - 1)
    }

    if (question.difficulty === 9) {
      return alert('You win!')
    }

    setQuestion(generateQuestion(question.difficulty + 1))
  }

  return (
    <div className="h-svh items-center justify-center overflow-auto bg-slate-400 p-8">
      <p>Current difficulty: {question.difficulty + 1}</p>
      <p>Remaining lives: {remainingLives}</p>

      <QuestionBox question={question} onChoose={handleAnswer} />

      <div className="flex flex-col gap-8">
        {times(10).map(difficulty => (
          <div key={difficulty}>
            <h2 className="text-5xl font-bold text-white">Difficulty {difficulty + 1}</h2>
            <div className="flex">
              {times(4).map(i => (
                <QuestionBox
                  key={i}
                  question={generateQuestion(difficulty)}
                  onChoose={isCorrect => alert(isCorrect ? 'Correct!' : 'Wrong!')}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
