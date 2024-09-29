import { motion, Transition } from 'framer-motion'
import { times } from 'lodash'
import { Heart } from 'lucide-react'
import { Flex } from 'theme-ui'

const MHeart = motion.create(Heart)

const transition: Transition = { duration: 0.3 }

// TODO add animation and easter egg for the last heart
export const RemainingLives = ({
  remainingLives,
  maxLives,
}: {
  remainingLives: number
  maxLives: number
}) => (
  <Flex>
    {times(maxLives).map(i => {
      const isLost = i >= remainingLives

      return (
        <motion.div
          key={i}
          animate={isLost ? { scale: 0, rotate: [0, -10, 10, 0] } : {}}
          sx={{ position: 'relative' }}
          transition={transition}
        >
          <MHeart
            size={48}
            fill="red"
            animate={isLost ? { opacity: 0 } : {}}
            sx={{ position: 'absolute' }}
            transition={transition}
          />
          <MHeart size={48} />
        </motion.div>
      )
    })}
  </Flex>
)
