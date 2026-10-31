import { ArrowRight, ArrowUpRight, LucideIcon } from 'lucide-react'
import { Box } from 'theme-ui'

import { Link } from '../../links'
import { Center } from '../center'
import { Tone } from './card-utils'

export const CardArrow = ({ link }: { link: Link }) => (
  <Box
    className="card-arrow"
    sx={{
      flexShrink: 0,
      display: 'flex',
      color: 'muted',
      transition: 'transform 0.2s, color 0.2s',
    }}
  >
    {link.type === 'internal' ? <ArrowRight size={18} /> : <ArrowUpRight size={18} />}
  </Box>
)

type IconTileProps = {
  icon: LucideIcon
  tone: Tone
}

export const IconTile = ({ icon: Icon, tone }: IconTileProps) => (
  <Center
    sx={{
      flexShrink: 0,
      width: [40, 44],
      height: [40, 44],
      borderRadius: [11, 12],
      ...(tone === 'accent'
        ? { backgroundColor: 'primarySoft', color: 'primary' }
        : {
            backgroundColor: 'surfaceHover',
            border: '1px solid',
            borderColor: 'border',
            color: 'text',
          }),
    }}
  >
    <Icon size={20} strokeWidth={1.75} />
  </Center>
)
