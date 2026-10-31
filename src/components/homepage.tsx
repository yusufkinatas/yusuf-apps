import { AppWindow, Gamepad2, Heart } from 'lucide-react'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

import { links } from '../links'
import { AppRow } from './homepage/app-row'
import { GameCard } from './homepage/game-card'
import { SectionHeader } from './homepage/section-header'

const games = links.filter(link => link.category === 'game')
const apps = links.filter(link => link.category === 'app')

export const Homepage = () => (
  <Box
    sx={{
      minHeight: '100svh',
      backgroundColor: 'background',
      color: 'text',
      px: [3, 4],
    }}
  >
    <Box sx={{ width: '100%', maxWidth: 1080, mx: 'auto' }}>
      <Box as="section" sx={{ pt: ['40px', '80px'] }}>
        <Heading
          as="h1"
          sx={{
            fontSize: ['40px', '64px'],
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
          }}
        >
          Apps by{' '}
          <a
            href="https://yusufkinatas.com/"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'primary',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              ':hover': { opacity: 0.75 },
            }}
          >
            Yusuf
          </a>
        </Heading>

        <Text
          as="p"
          sx={{
            mt: ['10px', 3],
            maxWidth: 480,
            color: 'muted',
            fontSize: [2, 3],
            lineHeight: 1.5,
          }}
        >
          A collection of games and apps I&apos;ve built over the years.
        </Text>
      </Box>

      <Box as="section" id="games" sx={{ pt: ['40px', '64px'] }}>
        <SectionHeader icon={Gamepad2} title="Games" count={games.length} tone="accent" />

        <Grid
          sx={{
            gap: ['12px', 3],
            gridTemplateColumns: [
              'repeat(2, minmax(0, 1fr))',
              undefined,
              undefined,
              'repeat(3, minmax(0, 1fr))',
            ],
          }}
        >
          {games.map(link => (
            <GameCard key={link.name} link={link} />
          ))}
        </Grid>
      </Box>

      <Box as="section" id="apps" sx={{ pt: ['44px', '72px'] }}>
        <SectionHeader icon={AppWindow} title="Apps" count={apps.length} tone="neutral" />

        <Grid
          sx={{
            gap: [2, '12px'],
            gridTemplateColumns: [
              'minmax(0, 1fr)',
              undefined,
              undefined,
              'repeat(2, minmax(0, 1fr))',
            ],
          }}
        >
          {apps.map(link => (
            <AppRow key={link.name} link={link} />
          ))}
        </Grid>
      </Box>

      <Flex
        as="footer"
        sx={{
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
          mt: ['48px', '96px'],
          pt: ['24px', '28px'],
          pb: ['32px', '40px'],
          borderTop: '1px solid',
          borderColor: 'border',
          color: 'muted',
          fontSize: ['13px', 1],
        }}
      >
        <Flex sx={{ alignItems: 'center', gap: '6px' }}>
          developed with
          <Flex sx={{ color: 'primary' }}>
            <Heart size={14} fill="currentColor" role="img" aria-label="love" />
          </Flex>
        </Flex>

        <a
          href="https://yusufkinatas.com/"
          target="_blank"
          rel="noreferrer"
          sx={{
            color: 'muted',
            textDecoration: 'none',
            fontFamily: 'monospace',
            fontSize: ['12px', '13px'],
            transition: 'color 0.2s',
            ':hover': { color: 'text' },
          }}
        >
          yusufkinatas.com
        </a>
      </Flex>
    </Box>
  </Box>
)
