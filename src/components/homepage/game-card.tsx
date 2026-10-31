import { Link as RouterLink } from 'react-router-dom'
import { Flex, Text } from 'theme-ui'

import { Link } from '../../links'
import { CardArrow, IconTile } from './card'
import { cardSx, getLinkProps } from './card-utils'

export const GameCard = ({ link }: { link: Link }) => (
  <RouterLink
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...getLinkProps(link)}
    sx={{ ...cardSx, display: 'flex', flexDirection: 'column', p: ['16px', '20px'] }}
  >
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <IconTile icon={link.icon} tone="accent" />
      <CardArrow link={link} />
    </Flex>

    <Text
      sx={{
        mt: ['14px', '20px'],
        fontSize: ['15px', '17px'],
        fontWeight: 600,
        letterSpacing: '-0.01em',
        lineHeight: 1.25,
      }}
    >
      {link.name}
    </Text>
    <Text sx={{ mt: 1, fontSize: ['13px', 1], color: 'muted', lineHeight: 1.4 }}>
      {link.description}
    </Text>
  </RouterLink>
)
