import { times } from 'lodash'

import { BOX_COUNT } from './constants'
import { ColorQuestion } from './types'

export const QuestionBox = ({
  question: { color, differentColor, differentIndex },
  onChoose,
}: {
  question: ColorQuestion
  onChoose: (isCorrect: boolean) => void
}) => (
  <div
    sx={{
      display: 'grid',
      width: 'fit-content',
      minWidth: 'fit-content',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 2,
      border: '8px solid black',
      backgroundColor: 'white',
    }}
  >
    {times(BOX_COUNT).map(i => (
      <div
        onClick={() => onChoose(i === differentIndex)}
        sx={{
          width: 96,
          height: 96,
        }}
        key={i}
        style={{
          backgroundColor: i === differentIndex ? differentColor : color,
        }}
      />
    ))}
  </div>
)
