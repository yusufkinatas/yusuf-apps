import { Home } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { Button, Flex } from 'theme-ui'

import { SoundButton } from './sound-button'

export const GameLayout = () => (
  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100svh',
      p: 4,
      backgroundColor: 'background',
      position: 'relative',
    }}
  >
    <Flex sx={{ gap: 2 }}>
      <Link to="/">
        <Button variant="ghost">
          <Home />
        </Button>
      </Link>

      <SoundButton />
    </Flex>

    <div sx={{ flex: 1 }}>
      <Outlet />
    </div>
  </Flex>
)
