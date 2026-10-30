import { LucideIcon } from 'lucide-react'
import { Flex, Heading, Text } from 'theme-ui'

import { Tone } from './card-utils'

type SectionHeaderProps = {
  icon: LucideIcon
  title: string
  count: number
  description: string
  tone: Tone
}

export const SectionHeader = ({
  icon: Icon,
  title,
  count,
  description,
  tone,
}: SectionHeaderProps) => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '12px',
      mb: ['16px', '20px'],
    }}
  >
    <Flex sx={{ alignItems: 'center', gap: ['10px', '12px'] }}>
      <Flex sx={{ color: tone === 'accent' ? 'primary' : 'text' }}>
        <Icon size={24} strokeWidth={1.75} />
      </Flex>
      <Heading as="h2" sx={{ fontSize: ['22px', '28px'], letterSpacing: '-0.02em' }}>
        {title}
      </Heading>
      <Flex
        sx={{
          alignItems: 'center',
          height: [22, 24],
          px: '9px',
          borderRadius: 999,
          border: '1px solid',
          borderColor: 'border',
          fontFamily: 'monospace',
          fontSize: 0,
          color: 'muted',
        }}
      >
        {count}
      </Flex>
    </Flex>

    <Text as="p" sx={{ display: ['none', 'block'], fontSize: 1, color: 'muted' }}>
      {description}
    </Text>
  </Flex>
)
