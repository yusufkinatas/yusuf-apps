import { useState } from 'react'
import { Progress } from 'theme-ui'

import { Center } from '../components/center'
import { useConsecutive } from '../utils/use-consecutive'
import { useSoundEffect } from '../utils/use-sound-effect'
import { MAX_DIFFICULTY, MAX_LIVES } from './color-finder/constants'
import { generateQuestion } from './color-finder/generate-question'
import { QuestionBox } from './color-finder/question-box'
import { RemainingLives } from './color-finder/remaining-lives'

const PITCH_STEP = 0.05

type ColorFinderProps = {
  onGameOver: () => void
  onVictory: (isPerfect: boolean) => void
}

export const ColorFinder = ({ onGameOver, onVictory }: ColorFinderProps) => {
  const [question, setQuestion] = useState(() => generateQuestion(1))
  const [remainingLives, setRemainingLives] = useState(MAX_LIVES)

  const [consecutive, trackConsecutive] = useConsecutive<'wrong' | 'right'>()

  const [playJuut] = useSoundEffect('juut')
  const [playGil] = useSoundEffect('gil')

  const handleWrongAnswer = () => {
    playJuut({
      playbackRate:
        consecutive?.last === 'wrong' ? 1 - PITCH_STEP * consecutive.count : 1,
    })

    trackConsecutive('wrong')

    setRemainingLives(remainingLives - 1)
    setQuestion(generateQuestion(question.difficulty))
  }

  const handleRightAnswer = () => {
    playGil({
      playbackRate:
        consecutive?.last === 'right' ? 1 + PITCH_STEP * consecutive.count : 1,
    })

    trackConsecutive('right')

    setQuestion(generateQuestion(question.difficulty + 1))
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (!isCorrect) {
      if (remainingLives === 1) {
        return onGameOver()
      }

      return handleWrongAnswer()
    }

    if (question.difficulty === MAX_DIFFICULTY) {
      const isPerfect = remainingLives === MAX_LIVES

      return onVictory(isPerfect)
    }

    handleRightAnswer()
  }

  return (
    <Center sx={{ flex: 1, flexDirection: 'column', gap: 3, userSelect: 'none' }}>
      <Center sx={{ flexDirection: 'column', width: 240, gap: 1 }}>
        <div sx={{ fontSize: 4, fontWeight: 'bold' }}>Level: {question.difficulty}</div>
        <Progress
          max={MAX_DIFFICULTY - 1}
          value={question.difficulty - 1}
          sx={{ bg: 'white', height: 8 }}
        />
      </Center>

      <div>
        <RemainingLives remainingLives={remainingLives} maxLives={MAX_LIVES} />
      </div>

      <QuestionBox question={question} onChoose={handleAnswer} />
    </Center>
  )
}
