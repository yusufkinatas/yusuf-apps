import { motion } from 'framer-motion'
import { times } from 'lodash'
import { Heart } from 'lucide-react'
import { Flex } from 'theme-ui'

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
          animate={isLost ? { scale: 0, opacity: 0, rotate: [0, -20, 20, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Heart size={48} fill="red" />
        </motion.div>
      )
    })}
  </Flex>
)
