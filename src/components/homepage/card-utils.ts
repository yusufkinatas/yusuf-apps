import { ThemeUIStyleObject } from 'theme-ui'

import { Link } from '../../links'

export type Tone = 'accent' | 'neutral'

export const cardSx: ThemeUIStyleObject = {
  borderRadius: 14,
  backgroundColor: 'surface',
  border: '1px solid',
  borderColor: 'border',
  color: 'text',
  textDecoration: 'none',
  transition: 'transform 0.2s, background-color 0.2s, border-color 0.2s',
  ':hover': {
    backgroundColor: 'surfaceHover',
    borderColor: 'borderHover',
    transform: 'translateY(-2px)',
  },
  ':hover .card-arrow': { color: 'primary', transform: 'translate(2px, -2px)' },
}

export const getLinkProps = (link: Link) =>
  link.type === 'internal'
    ? { to: `/game/${link.slug}` }
    : { to: link.href, target: '_blank', rel: 'noreferrer' }
