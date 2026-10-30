import { Link as RouterLink } from 'react-router-dom'
import { Flex, Text } from 'theme-ui'

import { Link } from '../../links'
import { CardArrow, IconTile } from './card'
import { cardSx, getLinkCaption, getLinkProps } from './card-utils'

export const AppRow = ({ link }: { link: Link }) => (
  <RouterLink
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...getLinkProps(link)}
    sx={{
      ...cardSx,
      display: 'flex',
      alignItems: 'center',
      gap: ['14px', 3],
      py: ['14px', 3],
      pl: ['14px', 3],
      pr: [3, '20px'],
    }}
  >
    <IconTile icon={link.icon} tone="neutral" />

    <Flex sx={{ flex: 1, minWidth: 0, flexDirection: 'column', gap: '2px' }}>
      <Text sx={{ fontSize: ['15px', 2], fontWeight: 600 }}>{link.name}</Text>
      <Text
        sx={{
          fontSize: ['13px', 1],
          color: 'muted',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {link.description}
      </Text>
    </Flex>

    <Text
      sx={{
        display: ['none', 'block'],
        flexShrink: 0,
        fontFamily: 'monospace',
        fontSize: 0,
        color: 'muted',
      }}
    >
      {getLinkCaption(link)}
    </Text>
    <CardArrow link={link} />
  </RouterLink>
)
