import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

import { InternalLink } from '../../links'

export const FeaturedGameCard = ({ link }: { link: InternalLink }) => (
  <Grid
    sx={{
      gridColumn: 'span 2',
      gridRow: ['auto', undefined, undefined, 'span 2'],
      gridTemplateColumns: 'minmax(0, 1fr) auto',
      alignItems: ['start', 'center'],
      gap: [3, 4],
      p: ['20px', '32px'],
      borderRadius: [16, 14],
      backgroundColor: 'primaryTint',
      border: '1px solid',
      borderColor: 'primaryBorder',
    }}
  >
    <Flex sx={{ minWidth: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
      <Flex
        sx={{
          alignItems: 'center',
          gap: 2,
          height: [26, 28],
          px: '12px',
          borderRadius: 999,
          backgroundColor: 'primarySoft',
          color: 'primary',
          fontSize: ['12px', '13px'],
          fontWeight: 600,
        }}
      >
        <Box
          sx={{ width: 6, height: 6, borderRadius: 999, backgroundColor: 'primary' }}
        />
        Plays right here
      </Flex>

      <Heading
        as="h3"
        sx={{
          mt: ['14px', '20px'],
          fontSize: ['28px', '40px'],
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
        }}
      >
        {link.name}
      </Heading>
      <Text as="p" sx={{ mt: ['6px', '10px'], fontSize: [1, 2], color: 'subtle' }}>
        {link.description}
      </Text>

      <Flex as="dl" sx={{ gap: ['20px', '28px'], mt: [3, 4], mb: 0 }}>
        {link.stats.map(stat => (
          <div key={stat.label}>
            <Text as="dt" sx={{ fontSize: 0, color: 'muted' }}>
              {stat.label}
            </Text>
            <Text as="dd" sx={{ m: 0, mt: '2px', fontSize: [2, 3], fontWeight: 600 }}>
              {stat.value}
            </Text>
          </div>
        ))}
      </Flex>

      <Link
        to={`/game/${link.slug}`}
        sx={{ variant: 'buttons.accent', mt: ['18px', '28px'] }}
      >
        Play now
        <ArrowRight size={18} />
      </Link>
    </Flex>

    <Box aria-hidden sx={{ width: [96, 240, undefined, 288] }}>
      {link.preview}
    </Box>
  </Grid>
)
