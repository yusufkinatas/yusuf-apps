import { Home } from 'lucide-react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex } from 'theme-ui'

import { SoundButton } from './sound-button'

type GameLayoutProps = {
  children: ReactNode
}

export const GameLayout = ({ children }: GameLayoutProps) => (
  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100svh',
      p: 4,
      backgroundColor: 'slategray',
      position: 'relative',
    }}
  >
    <Flex sx={{ gap: 2 }}>
      <Link to="/">
        <Button>
          <Home />
        </Button>
      </Link>

      <SoundButton />
    </Flex>

    {children}
  </Flex>
)
