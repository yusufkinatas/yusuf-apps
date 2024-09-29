import { useState } from 'react'

import { generateQuestion } from './color-finder/generate-question'
import { QuestionBox } from './color-finder/question-box'

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
    <div
      sx={{
        display: 'flex',
        height: '100svh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        backgroundColor: 'slategray',
      }}
    >
      <div>Current difficulty: {question.difficulty + 1}</div>
      <div>Remaining lives: {remainingLives}</div>

      <QuestionBox question={question} onChoose={handleAnswer} />
    </div>
  )
}
