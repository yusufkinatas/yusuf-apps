import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

import { games } from '../games'
import { Center } from './center'

export const Homepage = () => (
  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100svh',
      p: 4,
      backgroundColor: 'slategray',
    }}
  >
    <Center sx={{ flex: 1, flexDirection: 'column', gap: 4 }}>
      <Heading as="h1" sx={{ color: 'white' }}>
        Games by{' '}
        <a
          target="_blank"
          sx={{ color: '#FA8909' }}
          href="https://yusufkinatas.com/"
          rel="noreferrer"
        >
          Yusuf
        </a>
      </Heading>

      <Box sx={{ width: '100%', maxWidth: 400 }}>
        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          {games.map(game => (
            <Link key={game.slug} to={`/game/${game.slug}`}>
              <Button sx={{ bg: 'white', width: '100%', color: 'text' }}>
                <Flex sx={{ alignItems: 'center', gap: 3 }}>
                  <Box sx={{ fontSize: 5, minWidth: 60 }}>{game.emoji}</Box>
                  <Flex
                    sx={{
                      flex: 1,
                      textAlign: 'left',
                      gap: 1,
                      flexDirection: 'column',
                    }}
                  >
                    <Heading as="h3">{game.name}</Heading>
                    <Text sx={{ fontSize: 1 }}>{game.description}</Text>
                  </Flex>
                  <Box>
                    <ArrowRight />
                  </Box>
                </Flex>
              </Button>
            </Link>
          ))}
        </Flex>
      </Box>
    </Center>

    <i sx={{ fontSize: 2, fontWeight: 'normal', color: 'white' }}>developed with 🧡</i>
  </Flex>
)
