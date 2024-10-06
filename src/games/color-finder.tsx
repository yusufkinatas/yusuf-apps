import { useState } from 'react'
import { Button, Progress } from 'theme-ui'

import { Center } from '../components/center'
import { useConsecutive } from '../utils/use-consecutive'
import { useSoundEffect } from '../utils/use-sound-effect'
import { LEVEL_COUNT, MAX_LIVES } from './color-finder/constants'
import { generateQuestion } from './color-finder/generate-question'
import { QuestionBox } from './color-finder/question-box'
import { RemainingLives } from './color-finder/remaining-lives'
import { HintLevel } from './color-finder/types'

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
  const [hintLevel, setHintLevel] = useState<HintLevel>(0)

  const handleWrongAnswer = () => {
    playJuut({
      playbackRate:
        consecutive?.last === 'wrong' ? 1 - PITCH_STEP * consecutive.count : 1,
    })

    trackConsecutive('wrong')

    setRemainingLives(remainingLives - 1)
    setQuestion(generateQuestion(question.level))
    setHintLevel(0)
  }

  const handleRightAnswer = () => {
    playGil({
      playbackRate:
        consecutive?.last === 'right' ? 1 + PITCH_STEP * consecutive.count : 1,
    })

    trackConsecutive('right')

    setQuestion(generateQuestion(question.level + 1))
    setHintLevel(0)
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (!isCorrect) {
      if (remainingLives === 1) {
        return onGameOver()
      }

      return handleWrongAnswer()
    }

    if (question.level === LEVEL_COUNT) {
      const isPerfect = remainingLives === MAX_LIVES

      return onVictory(isPerfect)
    }

    handleRightAnswer()
  }

  return (
    <Center sx={{ flex: 1, flexDirection: 'column', gap: 3, userSelect: 'none' }}>
      <Center sx={{ flexDirection: 'column', gap: 3 }}>
        <Button
          onClick={() =>
            setHintLevel(p => {
              if (p === 0) return 1
              if (p === 1) return 2
              if (p === 2) return 3

              return 0
            })
          }
        >
          Hint {hintLevel}
        </Button>
        <div sx={{ textAlign: 'center' }}>
          <div sx={{ fontSize: 4, fontWeight: 'bold', lineHeight: 1 }}>
            Level: {question.level}
          </div>
          <div sx={{ fontSize: 2, fontWeight: 300 }}>
            Difference: {question.differenceAmount}%
          </div>
        </div>
        <Progress
          max={LEVEL_COUNT - 1}
          value={question.level - 1}
          sx={{ bg: 'white', height: 8, width: 240 }}
        />
      </Center>

      <div>
        <RemainingLives remainingLives={remainingLives} maxLives={MAX_LIVES} />
      </div>

      <QuestionBox hintLevel={hintLevel} question={question} onChoose={handleAnswer} />
    </Center>
  )
}
