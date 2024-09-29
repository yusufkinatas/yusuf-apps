import { motion } from 'framer-motion'
import { useState } from 'react'
import { Box, Button, Flex } from 'theme-ui'

import { Center } from './components/center'
import { SoundButton } from './components/sound-button'
import { ColorFinder } from './games/color-finder'
import { useSoundEffect } from './utils/use-sound-effect'

export const App = () => {
  const [playGameOver] = useSoundEffect('gameOver', { playbackRate: 1, volume: 2 })
  const [playVictory] = useSoundEffect('victory', { playbackRate: 1.1, volume: 1.3 })

  const [gameState, setGameState] = useState<'play' | 'lost' | 'won'>('play')

  const handleGameOver = () => {
    playGameOver()
    setGameState('lost')
  }

  const handleVictory = (isPerfect: boolean) => {
    playVictory()
    setGameState('won')
    if (isPerfect) {
      // TODO add a special effect here for perfect victory
      alert('Perfect victory! 🏆, you should see a special thing here probably')
    }
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '100svh',
        backgroundColor: 'slategray',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 3,
          left: 3,
        }}
      >
        <SoundButton />
      </Box>

      {gameState === 'play' && (
        <ColorFinder onGameOver={handleGameOver} onVictory={handleVictory} />
      )}

      {gameState !== 'play' && (
        <Center sx={{ flex: 1, flexDirection: 'column' }}>
          <motion.h1
            animate={{ rotate: [3, -3] }}
            transition={{
              duration: 0.5,
              repeatType: 'mirror',
              repeat: Infinity,
            }}
          >
            {gameState === 'lost' ? '🥺 Game over 🥺' : '🏆 Victory! 🏆'}
          </motion.h1>
          <Button onClick={() => setGameState('play')}>Play again</Button>
        </Center>
      )}
    </Flex>
  )
}
