import { ReactNode } from 'react'

import { ColorFinder } from './games/color-finder'

type Game = {
  slug: string
  name: string
  description: string
  emoji: string
  component: ReactNode
}

export const games: Game[] = [
  {
    slug: 'color-finder',
    name: 'Color Finder',
    description: 'Find the different colored square!',
    emoji: '🎨',
    component: <ColorFinder />,
  },
]
