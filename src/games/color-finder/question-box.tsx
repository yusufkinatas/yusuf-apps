import { motion } from 'framer-motion'
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
  <motion.div
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      p: 1,
      backgroundColor: 'white',
    }}
  >
    {times(BOX_COUNT).map(i => (
      <motion.div
        key={i}
        onClick={() => onChoose(i === differentIndex)}
        whileHover={{
          borderRadius: 16,
        }}
        whileTap={{
          scale: 0.9,
          borderRadius: 16,
        }}
        sx={{
          m: 1,
          bg: i === differentIndex ? differentColor : color,
          width: 96,
          height: 96,
          cursor: 'pointer',
        }}
      />
    ))}
  </motion.div>
)
