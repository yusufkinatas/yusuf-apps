import { motion, Variant } from 'framer-motion'
import { times } from 'lodash'
import { CircleCheck } from 'lucide-react'
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
  3: 1,
}

const MButton = motion.create(Button)
const MCircleCheck = motion.create(CircleCheck)

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
      outline: '8px solid black',
    }}
  >
    {times(BOX_COUNT).map(i => {
      const isDifferentBox = i === differentIndex
      const shouldShowCheck = isDifferentBox && hintLevel === 3

      return (
        <MButton
          variant="unstyled"
          key={i}
          onClick={() => onChoose(isDifferentBox)}
          whileHover={BoxVariant.hover}
          whileFocus={BoxVariant.hover}
          whileTap={BoxVariant.tap}
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1/1',
            outline: 'none',
          }}
        >
          <motion.div
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: isDifferentBox ? differentColor : color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            initial={{ scale: scalePerHintLevel[hintLevel] }}
            animate={{ scale: scalePerHintLevel[hintLevel] }}
            variants={boxVariants}
          >
            {shouldShowCheck && (
              <MCircleCheck
                size="50%"
                fill="white"
                color="black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>
        </MButton>
      )
    })}
  </div>
)
