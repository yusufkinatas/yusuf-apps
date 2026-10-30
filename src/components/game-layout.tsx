import { ArrowLeft } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { Box, Flex, Heading, Text } from 'theme-ui'

import { InternalLink } from '../links'
import { SoundButton } from './sound-button'

export const GameLayout = ({ link }: { link: InternalLink }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100svh',
      px: [3, 4],
      backgroundColor: 'background',
      position: 'relative',
    }}
  >
    <Box
      as="header"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
        alignItems: 'center',
        gap: 3,
        width: '100%',
        maxWidth: 1080,
        mx: 'auto',
        py: ['16px', '24px'],
        borderBottom: '1px solid',
        borderColor: 'border',
      }}
    >
      <Link
        to="/"
        aria-label="Back to all games"
        sx={{
          variant: 'buttons.ghost',
          justifySelf: 'start',
          gap: 2,
          pl: '14px',
          pr: ['14px', '18px'],
          fontSize: 1,
          fontWeight: 500,
        }}
      >
        <ArrowLeft size={18} />
        <Text sx={{ display: ['none', 'inline'] }}>All games</Text>
      </Link>

      <Box sx={{ textAlign: 'center' }}>
        <Heading as="h1" sx={{ fontSize: 2, fontWeight: 600 }}>
          {link.name}
        </Heading>
        <Text
          as="p"
          sx={{ display: ['none', 'block'], mt: '2px', fontSize: '13px', color: 'muted' }}
        >
          {link.description}
        </Text>
      </Box>

      <Box sx={{ justifySelf: 'end' }}>
        <SoundButton />
      </Box>
    </Box>

    <Box sx={{ flex: 1, py: [4, '40px'] }}>
      <Outlet />
    </Box>
  </Flex>
)
