import { times } from 'lodash'

import { BOX_COUNT } from './contants'
import { ColorQuestion } from './types'

export const QuestionBox = ({
  question: { color, differentColor, differentIndex },
  onChoose,
}: {
  question: ColorQuestion
  onChoose: (isCorrect: boolean) => void
}) => (
  <div className="grid w-fit min-w-fit grid-cols-3 gap-2 border-8 border-black bg-white">
    {times(BOX_COUNT).map(i => (
      <div
        onClick={() => onChoose(i === differentIndex)}
        className="size-24"
        key={i}
        style={{
          backgroundColor: i === differentIndex ? differentColor : color,
        }}
      />
    ))}
  </div>
)
