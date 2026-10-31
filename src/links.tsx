import {
  Anchor,
  AudioWaveform,
  CalendarCheck,
  Dumbbell,
  Flame,
  Heart,
  LucideIcon,
  Mic,
  Music,
  Orbit,
  Package,
  Palette,
  Route,
  SlidersVertical,
  Sparkles,
  Sword,
  Timer,
  WandSparkles,
  Zap,
} from 'lucide-react'
import { ReactNode } from 'react'

import { ColorFinder } from './games/color-finder'

export type LinkCategory = 'game' | 'app'

type LinkBase = {
  category: LinkCategory
  name: string
  description: string
  icon: LucideIcon
}

// Played on this site
export type InternalLink = LinkBase & {
  type: 'internal'
  slug: string
  component: ReactNode
}

export type ExternalLink = LinkBase & {
  type: 'external'
  href: string
}

export type Link = InternalLink | ExternalLink

export const links: Link[] = [
  {
    type: 'external',
    category: 'app',
    name: 'Master Yi',
    description: 'The first ever website I made',
    icon: Sword,
    href: 'https://masteryi.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Sokoban',
    description: 'Classic box-pushing puzzle game',
    icon: Package,
    href: 'https://sokoban.yusuf.app/',
  },
  {
    type: 'internal',
    category: 'game',
    slug: 'color-finder',
    name: 'Color Finder',
    description: 'Find the different colored square',
    icon: Palette,
    component: <ColorFinder />,
  },
  {
    type: 'external',
    category: 'app',
    name: '28 Days Challenge',
    description: 'Build habits in 28 days',
    icon: CalendarCheck,
    href: 'https://28.yusuf.app/',
  },

  {
    type: 'external',
    category: 'app',
    name: 'Lovable Clone',
    description: 'Fully functional text-to-app AI',
    icon: Sparkles,
    href: 'https://lovable.yusuf.app',
  },
  {
    type: 'external',
    category: 'app',
    name: 'Workout',
    description: 'My personal workout companion',
    icon: Dumbbell,
    href: 'https://workout.yusuf.app/',
  },
  {
    type: 'external',
    category: 'app',
    name: 'Countime',
    description: 'Shareable online countdown timer',
    icon: Timer,
    href: 'https://countime.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Spell Fight',
    description: 'Spell-casting battle game',
    icon: WandSparkles,
    href: 'https://spellfight.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Orbitrush',
    description: 'Endless neon orbit runner',
    icon: Orbit,
    href: 'https://orbit.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Flow Commander',
    description: 'Cozy pixel-art routing puzzle',
    icon: Route,
    href: 'https://flow.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Heartward',
    description: 'Emotional counterpoint arcade',
    icon: Heart,
    href: 'https://heartward.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Loop Survivors',
    description: 'Music-loop-driven survivors-like',
    icon: Music,
    href: 'https://loop.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Loop Survivors (Alt)',
    description: 'Alternate take: six-channel mixer',
    icon: SlidersVertical,
    href: 'https://loop-alt.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Embermarch',
    description: 'Cheap attempt at a roguelike RTS',
    icon: Flame,
    href: 'https://ember.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'One Finger Dragon Punch',
    description: 'LoL-style One Finger Death Punch',
    icon: Zap,
    href: 'https://leesin.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Abyssal Weight',
    description: 'Made in Abyss extraction roguelike',
    icon: Anchor,
    href: 'https://abyss.yusuf.app/',
  },
  {
    type: 'external',
    category: 'game',
    name: 'Rhyme Game',
    description: 'Turkish rhyme-making game',
    icon: Mic,
    href: 'https://rhyme.yusuf.app/',
  },
  {
    type: 'external',
    category: 'app',
    name: 'Beatbox Practice',
    description: 'Practice beatbox sounds',
    icon: AudioWaveform,
    href: 'https://beatbox.yusuf.app/',
  },
]
