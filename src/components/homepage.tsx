import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

import { links } from '../links'
import { Center } from './center'

export const Homepage = () => (
  <Box
    sx={{
      minHeight: '100svh',
      backgroundColor: 'background',
      color: 'text',
      px: [3, 4],
      py: [5, 6],
    }}
  >
    <Box sx={{ width: '100%', maxWidth: 760, mx: 'auto' }}>
      <Box as="header" sx={{ mb: [4, 5] }}>
        <Heading
          as="h1"
          sx={{
            fontSize: ['40px', '56px'],
            fontWeight: 700,
            letterSpacing: '-0.03em',
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
          sx={{
            display: 'block',
            mt: 3,
            maxWidth: 460,
            color: 'muted',
            fontSize: [2, 3],
            lineHeight: 1.5,
          }}
        >
          A collection of games and apps I&apos;ve built over the years.
        </Text>
      </Box>

      <Grid sx={{ gap: 3, gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'] }}>
        {links.map(link => (
          <Link
            key={link.name}
            to={link.type === 'game' ? `/game/${link.slug}` : link.href}
            target={link.type === 'game' ? undefined : '_blank'}
            rel={link.type === 'game' ? undefined : 'noreferrer'}
            style={{ textDecoration: 'none', display: 'block', height: '100%' }}
          >
            <Box
              sx={{
                height: '100%',
                p: 3,
                borderRadius: 14,
                backgroundColor: 'surface',
                border: '1px solid',
                borderColor: 'border',
                transition: 'transform 0.2s, background-color 0.2s, border-color 0.2s',
                ':hover': {
                  backgroundColor: 'surfaceHover',
                  borderColor: 'borderHover',
                  transform: 'translateY(-2px)',
                },
                ':hover .card-arrow': { color: 'primary', transform: 'translateX(3px)' },
              }}
            >
              <Flex sx={{ alignItems: 'center', gap: 3 }}>
                <Center
                  sx={{
                    flexShrink: 0,
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    fontSize: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid',
                    borderColor: 'border',
                  }}
                >
                  {link.emoji}
                </Center>

                <Flex sx={{ flex: 1, minWidth: 0, flexDirection: 'column', gap: 1 }}>
                  <Heading
                    as="h3"
                    sx={{ fontSize: 2, fontWeight: 600, letterSpacing: '-0.01em', color: 'text' }}
                  >
                    {link.name}
                  </Heading>
                  <Text sx={{ fontSize: 1, color: 'muted', lineHeight: 1.4 }}>
                    {link.description}
                  </Text>
                </Flex>

                <Box
                  className="card-arrow"
                  sx={{
                    flexShrink: 0,
                    display: 'flex',
                    color: 'muted',
                    transition: 'transform 0.2s, color 0.2s',
                  }}
                >
                  {link.type === 'game' ? <ArrowRight size={20} /> : <ArrowUpRight size={20} />}
                </Box>
              </Flex>
            </Box>
          </Link>
        ))}
      </Grid>

      <Text as="p" sx={{ mt: [5, 6], color: 'muted', fontSize: 1 }}>
        developed with 🧡
      </Text>
    </Box>
  </Box>
)
