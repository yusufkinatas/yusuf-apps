import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

import { links } from '../links'
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
        Apps by{' '}
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
          {links.map(link => (
            <Link
              target={link.type === 'game' ? undefined : '_blank'}
              key={link.name}
              to={link.type === 'game' ? `/game/${link.slug}` : link.href}
            >
              <Button sx={{ bg: 'white', width: '100%', color: 'text' }}>
                <Flex sx={{ alignItems: 'center', gap: 3 }}>
                  <Box sx={{ fontSize: 5, minWidth: 60 }}>{link.emoji}</Box>
                  <Flex
                    sx={{
                      flex: 1,
                      textAlign: 'left',
                      gap: 1,
                      flexDirection: 'column',
                    }}
                  >
                    <Heading as="h3">{link.name}</Heading>
                    <Text sx={{ fontSize: 1 }}>{link.description}</Text>
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
