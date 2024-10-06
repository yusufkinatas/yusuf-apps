import { motion, Variant } from 'framer-motion'
import { times } from 'lodash'
import { Button } from 'theme-ui'

import { BOX_COUNT } from './constants'
import { ColorQuestion, HintLevel } from './types'

enum BoxVariant {
  hover = 'hover',
  tap = 'tap',
}

const boxVariants: Record<BoxVariant, Variant> = {
  hover: {
    borderRadius: 16,
    scale: 0.85,
  },
  tap: {
    scale: 0.8,
    borderRadius: 16,
  },
}

const scalePerHintLevel: Record<HintLevel, number> = {
  0: 0.9,
  1: 0.95,
  2: 1,
}

const MButton = motion.create(Button)

type QuestionBoxProps = {
  question: ColorQuestion
  onChoose: (isCorrect: boolean) => void
  hintLevel: HintLevel
}

export const QuestionBox = ({
  question: { color, differentColor, differentIndex },
  onChoose,
  hintLevel,
}: QuestionBoxProps) => (
  <div
    sx={{
      maxWidth: 480,
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      backgroundColor: 'white',
      border: '3px solid black',
    }}
  >
    {times(BOX_COUNT).map(i => (
      <MButton
        key={i}
        onClick={() => onChoose(i === differentIndex)}
        whileHover={BoxVariant.hover}
        whileFocus={BoxVariant.hover}
        whileTap={BoxVariant.tap}
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1/1',
          outline: 'none',
          bg: 'transparent',
          p: 0,
        }}
      >
        <motion.div
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: i === differentIndex ? differentColor : color,
          }}
          initial={{ scale: scalePerHintLevel[hintLevel] }}
          animate={{ scale: scalePerHintLevel[hintLevel] }}
          variants={boxVariants}
        />
      </MButton>
    ))}
  </div>
)
