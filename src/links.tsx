import { ReactNode } from 'react'

import { ColorFinder } from './games/color-finder'

type LinkBase = {
  type: 'game' | 'app'
  name: string
  description: string
  emoji: string
}

type GameLink = LinkBase & {
  type: 'game'
  slug: string
  component: ReactNode
}

type AppLink = LinkBase & {
  type: 'app'
  href: string
}

type Link = GameLink | AppLink

export const links: Link[] = [
  {
    type: 'app',
    name: 'Master Yi',
    description: 'The first ever website I made',
    emoji: '⚔️',
    href: 'https://masteryi.yusuf.app/',
  },
  {
    type: 'app',
    name: 'Sokoban',
    description: 'Classic box-pushing puzzle game',
    emoji: '📦',
    href: 'https://sokoban.yusuf.app/',
  },
  {
    type: 'game',
    slug: 'color-finder',
    name: 'Color Finder',
    description: 'Find the different colored square',
    emoji: '🎨',
    component: <ColorFinder />,
  },
  {
    type: 'app',
    name: '28 Days Challenge',
    description: 'Build habits in 28 days',
    emoji: '📆',
    href: 'https://28.yusuf.app/',
  },

  {
    type: 'app',
    name: 'Lovable Clone',
    description: 'Fully functional text-to-app AI',
    emoji: '❤️',
    href: 'https://lovable.yusuf.app',
  },
  {
    type: 'app',
    name: 'Workout',
    description: 'My personal workout companion',
    emoji: '💪',
    href: 'https://workout.yusuf.app/',
  },
  {
    type: 'app',
    name: 'Countime',
    description: 'Online & shareable countdown timer',
    emoji: '⏱️',
    href: 'https://countime.yusuf.app/',
  },
]
